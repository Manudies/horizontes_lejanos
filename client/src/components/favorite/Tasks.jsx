import { useEffect, useState } from "react";
import { fetchTasks } from "../../utils/fetch";
import Modal from "../modal/Modal";
import CreateTask from "./CreateTask";
import Task from "./Task";
import "./Tasks.css"

const Tasks = ({  project }) => {
    const [tasks,setTasks] = useState(null);
    const [isAddingTask, setIsAddingTask] = useState(false);
    useEffect(() => {
        getTasks(project);
    },[project])

    async function getTasks(project) {
        const result = await fetchTasks(project._id);
        if (!result.error) {
            handleSetTasks(result.data);
        }
    }
    function getTasksByStatus(tasks) {
        const todo = tasks.filter(task => task.status === "todo");
        const doing = tasks.filter(task => task.status === "doing");
        const done = tasks.filter(task => task.status === "done");
        return { todo, doing, done };
    }
    function handleSetTasks (tasks) {
        setTasks(tasks);
    }
    function handleCreateTask(task) {
        setTasks([...tasks, task]);
        setIsAddingTask(false);
    }
    function handleRemoveTask(task) {
        setTasks(tasks => tasks.filter(t => t._id !== task._id));
    }
    function handleChangeTask(task) {
        setTasks(tasks =>tasks.map(t => t._id === task._id ? task : t));
    }
    if (!tasks) {
        return <p>Loading...</p>
    }
    const tasksByStatus = getTasksByStatus(tasks);
    return (
        <section className="tasks">
            <h3>Tasks</h3>
            <p>Total: {tasks.length}</p>
            {isAddingTask &&
                <Modal onClose={() => setIsAddingTask(false)}>
                    <CreateTask project={project} onCreate={handleCreateTask} />
                </Modal>
            }
            <button onClick={() => setIsAddingTask(true)}>Add Task</button>
            <section className="tasks-list">
                <TaskList
                    title="todo"
                    tasks={tasksByStatus.todo}
                    project={project}
                    onChange={handleChangeTask}
                    onDelete={handleRemoveTask}
                />
                <TaskList
                    title="doing"
                    tasks={tasksByStatus.doing}
                    project={project}
                    onChange={handleChangeTask}
                    onDelete={handleRemoveTask}
                />
                <TaskList
                    title="done"
                    tasks={tasksByStatus.done}
                    project={project}
                    onChange={handleChangeTask}
                    onDelete={handleRemoveTask}
                />
            </section>
        </section>
    )
}
const TaskList = ({ title, tasks, project, onChange,onDelete }) => (
    <section className={`tasks-${title}`}>
        <h2>{title}</h2>
        {tasks.map(task => (
            <Task
                key={task._id}
                task={task}
                project={project}
                onChange={onChange}
                onDelete={onDelete}
            />
        ))}
    </section>
);
export default Tasks