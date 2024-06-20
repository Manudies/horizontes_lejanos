import { createUser, updateUser } from "../../utils/fetch";
import ActionButton from "../../components/actionButton/actionButton";
import "./CreateUser.css";
const CreateUser= ({onCreate, onUpdate, user=null})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = e.target.role.value;
        const data = {username,email,password,role};
        console.log("data",data)
        if(user === null){
            const result = await createUser(data);
            console.log("result crieit",result)
            onCreate(result.data);
        }
        else{
            const result = await updateUser(user._id,data);
            console.log("result",result)
            onUpdate(result.data);
        }
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
            <select name="role" id="">
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>

            <ActionButton label="Crear" className="create" type="submit"></ActionButton>

        </form>
    )
}


export default CreateUser;