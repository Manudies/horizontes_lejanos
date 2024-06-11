import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateProject from "../../components/project/CreateProject";
import { deleteProject } from "../../utils/fetch";
import "./ProjectsList.css";
import Confirm from "../../components/confirm/Confirm";
const ProjectsList = () => {
    const [projects, setProjects] = useState(useLoaderData());
    const [creatingProject, setCreatingProject] = useState(false);

    const handleCreateProject = (project) => {
        setCreatingProject(false);
        setProjects([project, ...projects]);
    }
    const handleDeleteProject = async (id) => {
        const result = await deleteProject(id);
        if (!result.error) {
            setProjects(projects.filter(project => project._id !== id));
        }
    }
    const projectsHtml = projects.map(project => {
        return (
            <article className="project-list-element" key={project._id}>
                <h2>{project.name}</h2>
                <p>Users : {project.users.length}</p>
                <p>Tasks : {project.tasks.length}</p>
                <section className="buttons">
                    <Link to={`/projects/${project._id}`}>View</Link>
                    <Confirm
                        title="Delete Project"
                        className="cancel"
                        message="Are you sure you want to delete this project?"
                        onConfirm={() => handleDeleteProject(project._id)}
                        onCancel={() => console.log("cancel")}
                    />
                </section>
            </article>
        )
    })

    return (
        <>
            {creatingProject ?
                <Modal onClose={() => setCreatingProject(false)}>
                    <CreateProject onCreate={handleCreateProject} />
                </Modal>
                :
                <button className="new-project" onClick={() => setCreatingProject(true)}>New Project</button>
            }
            <section className="project-list">
                {projectsHtml}
            </section>
        </>
    )
}

export default ProjectsList