import { createProject } from "../../utils/fetch";
import "./CreateProject.css"
const CreateProject = ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const daysToComplete = e.target.daysToComplete.value;
        const data = {name,description,daysToComplete };
        console.log("name",data)
        const result = await createProject(data);
        console.log("result",result)
        onCreate(result.data);
    }
    return (
        <form action="" className="create-project" onSubmit={handleSubmit}>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name"/>
            <label htmlFor="description" >Description</label>
            <textarea name="description"></textarea>
            <label htmlFor="daysToComplete" >Days to complete</label>
            <input type="number" name="daysToComplete"/>
            <button type="submit">Create</button>
        </form>
    )
}
export default CreateProject;