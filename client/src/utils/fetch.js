import { getToken } from "./local";

const API_URL = import.meta.env.VITE_BACKEND_URL

const fetchData = async(route,method,inputData=null)=>{
    console.log("url",API_URL,route)
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
    return result;
}

const fetchUserData = async()=>{
    const result = await fetchData("/users/bytoken","get");
    return result;
}

const getTrips = async()=>{
    const result = await fetchData("/trips","get");
    return result;
}
const createTrip = async(tripData)=>{
    const result = await fetchData("/trips","post",tripData);
    return result;
}
const remove = async(tripId)=>{
    const result = await fetchData("/trips/"+tripId,"delete");
    return result;
}
const update = async(tripId,tripData)=>{
    const result = await fetchData("/trips/"+tripId,"put",tripData);
    return result;
}
const getByProperty = async(tripDestino)=>{
    const result = await fetchData(`/trips/byproperty?property=destino&value=${tripDestino}`,"get");
    return result;
}

const getUsers = async()=>{
    const result = await fetchData("/users","get");
    return result;
}

const createUser = async(userData)=>{
    const result = await fetchData("/users","post",userData);
    return result;
}
 const addTrip = async(userId, tripId)=>{
    const result = await fetchData("/users/"+userId+"/trips","post",{tripId});
    return result;
}

const removeTrip = async(userId, tripId)=>{
    const result = await fetchData("/users/"+userId+"/trips/"+tripId,"delete");
    return result;
}
 
const sendMail = async (data) => {
    const result = await fetchData ("/send-email", "post", data);
    return result;
};


export {
    register,
    login,
    fetchUserData,
    getTrips,
    createTrip,
    remove,
    update,
    getByProperty,
    getUsers,
    createUser,
    addTrip,
    removeTrip,
    sendMail
}