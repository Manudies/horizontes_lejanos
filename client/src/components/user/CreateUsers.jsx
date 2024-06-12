import { createUser } from "../../utils/fetch";
import "./CreateUser.css"
const CreateUser= ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const data = {name,description};
        console.log("name",data)
        const result = await createUser(data);
        console.log("result",result)
        onCreate();
    }
    return (
        <form action="" className="create-user" onSubmit={handleSubmit}>
            <label htmlFor="username" >Nombre</label>
            <input type="text" name="username"/>
            <label htmlFor="email" >email</label>
            <input type="email" name="email"/>
            <label htmlFor="password" >Contraseña</label>
            <input type="password" name="password"/>
            <label htmlFor="role" >Rol</label>
            <input type="text" name="role"/>
        </form>
    )
}


export default CreateUser;