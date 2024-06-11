import { useState } from "react";
import { createTask } from "../../utils/fetch";
import ManageUsers from "./ManageUsers";
import "./CreateTask.css"
const CreateTask = ({project,onCreate})=>{
    const [users,setUsers] = useState([]);
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const estimatedHours = e.target.estimatedHours.value;
        const status = e.target.status.value;
        if(!title || !description){
            return;
        }
        const data = {project,title,description,estimatedHours ,status};
        if(users.length > 0){
            data.users = users;
        }
        console.log("name",data)
        const result = await createTask(data);
        console.log("result",result)
        onCreate(result.data);
    }
    const handleManageUsers = (users)=>{
        setUsers(users);
    }
    return (
        <form action="" className="create-project" onSubmit={handleSubmit}>
            <label htmlFor="title" >Title</label>
            <input type="text" name="title"/>
            <label htmlFor="description" >Description</label>
            <textarea name="description"></textarea>
            <label htmlFor="estimatedHours" >Estimated hours</label>
            <input type="number" name="estimatedHours"/>
            <label htmlFor="status">Status</label>
            <select name="status">
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>

            <ManageUsers users={project.users}  onChange={handleManageUsers} />
            <button type="submit">Create</button>
        </form>
    )
}
export default CreateTask;