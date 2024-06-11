import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Tasks from "../../components/task/Tasks";
import Users from "../../components/user/Users";
import "./Project_gpt.css";


const Project = () => {
    const project = useLoaderData();
    const [addingTask, setAddingTask] = useState(false);
    const getOwnerName = (users, id) => {
        const user = users.find(user => user._id === id);
        return user?.username;
    }
    
    return (
        <article className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Owner: {getOwnerName(project.users, project.owner)}</p>
            <Users project={project} />

            <p>Days to complete: {project.daysToComplete}</p>
            <Tasks project={project} />

        </article>
    )
}

export default Project;