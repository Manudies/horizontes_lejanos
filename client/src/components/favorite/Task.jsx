import ManageUsers from "./ManageUsers";
import { updateTask,removeTask } from "../../utils/fetch";
import { useState } from "react";
import Confirm from "../confirm/Confirm";
const Task = ({task,project,onChange,onDelete})=>{
    const [updatedTask,setUpdatedTask] = useState(task);
    const handleSubmit = async (newTask) =>{
        const result  = await updateTask(newTask);
        if(!result.error){
            setUpdatedTask(result.data);
        }
    }
    async function handleMove(direction)  {
        const statuses = ["todo","doing","done"];
        const currentIndex = statuses.indexOf(updatedTask.status);
        if(direction === "left" && canMove("left")){
                changeStatus(updatedTask,statuses[currentIndex-1]);
        }
        if(direction === "right" && canMove("right")){
                changeStatus(updatedTask,statuses[currentIndex+1]);
        }
    }
    async function changeStatus(task,status){
        const newTask = {...task,status};
        const result = await updateTask(newTask);
        onChange(result.data);
    }

    function canMove(direction) {
        const statuses = ["todo","doing","done"];
        const currentIndex = statuses.indexOf(updatedTask.status);
        if(direction === "left"){
            return currentIndex > 0;
        }
        if(direction === "right"){
            return currentIndex < statuses.length - 1;
        }
    }
    function handleRemoveTask() {
        removeTask(updatedTask._id);
        onDelete(updatedTask);
    }
    return(
        <article className="task">
            <h3>{updatedTask.title}</h3>
            <Confirm
                title="Delete"
                message="Are you sure you want to delete this task?"
                onConfirm={handleRemoveTask}
                onCancel={() => console.log("cancel")}
            />
            <section className="task-buttons">
            <button onClick={() => handleMove("left") } disabled={!canMove("left")} >Left</button>
            <button  onClick={() => handleMove("right")} disabled={!canMove("right")}>Right</button>
            </section>

            <p>{updatedTask.description}</p>
            <p>Estimated hours: {updatedTask.estimatedHours}</p>
            <ManageUsers  key={updatedTask} users={project.users} task={updatedTask} onSubmit={handleSubmit} />
        </article>
    )
}

export default Task;