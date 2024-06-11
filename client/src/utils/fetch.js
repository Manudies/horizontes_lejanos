import { getToken } from "./local";

const API_URL = import.meta.env.VITE_BACKEND_URL

const fetchData = async(route,method,inputData=null)=>{
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const register = async(userData)=>{
    const result = await fetchData("/register","post",userData);
    return result;
}
const login = async(userData)=>{
    const result = await fetchData("/login","post",userData);
    console.log("login",result);
    return result;
}
const fetchUserData = async()=>{
    const result = await fetchData("/users/bytoken","get");
    return result;
}
const fetchProjects = async()=>{
    const result = await fetchData("/projects","get");
    return result;
}
const fetchProject = async(id)=>{
    const result = await fetchData("/projects/"+id,"get");
    return result;
}
const createProject = async(projectData)=>{
    const result = await fetchData("/projects","post",projectData);
    return result;
}

const deleteProject = async(id)=>{
    const result = await fetchData("/projects/"+id,"delete");
    return result;
}
const fetchUsers = async(query)=>{
    const result = await fetchData("/users","get",query);
    return result;
}
const inviteUser = async(projectId,userId)=>{
    const result = await fetchData(`/invitations/`,"post",{project:projectId,to:userId});
    return result;
}

const fetchInvitations = async()=>{
    const result = await fetchData("/invitations","get");
    return result;
}
const acceptInvitation = async(invitationId)=>{
    const result = await fetchData("/invitations/"+invitationId+"/accept","post");
    return result;
}
const rejectInvitation = async(invitationId)=>{
    const result = await fetchData("/invitations/"+invitationId+"/reject","post");
    return result;
}
const fetchTasks = async(projectId)=>{
    const result = await fetchData("/tasks","get",{projectId});
    return result;
}
const createTask = async(taskData)=>{
    const result = await fetchData("/tasks","post",taskData);
    return result;
}
const removeTask = async(taskId)=>{
    const result = await fetchData("/tasks/"+taskId,"delete");
    return result;
}
const updateTask = async(taskData)=>{
    const result = await fetchData("/tasks/"+taskData._id,"put",taskData);
    return result;
}
export {
    register,
    login,
    fetchProjects,
    fetchProject,
    createProject,
    deleteProject,
    fetchUserData,
    fetchUsers,
    inviteUser,
    fetchInvitations,
    acceptInvitation,
    rejectInvitation,
    fetchTasks,
    createTask,
    removeTask,
    updateTask
}