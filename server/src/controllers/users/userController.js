import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userRows = {_id:1, username:1, email:1, role:1,projects:1};
const getAll = async(query=null)=> {
    try {
        const filter = {};
        if(query){
            // check if username or email is similar to query value with an or
            filter.$or = [
                {username: {$regex: ".*"+query+".*", $options: "i"}},
                {email: {$regex: ".*"+query+".*", $options: "i"}}
            ]

        }
        const users = await userModel.find(filter, userRows);
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getUserData(user){
    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        projects: user.projects
    }
}
const getById = async(id) =>{
    try {
        const user = await userModel.findById(id, userRows);
        return user
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value,isAdmin=false) =>{
    try {
        if(isAdmin){
            const users = await userModel.find({[property]:value});
            return users;
        }
        const users = await userModel.find({[property]:value}, userRows)
        return users;
    } catch (error) {
        return null;
    }
}

const login = async(data) =>{
    const {email,username,password} = data;
    if((!email && !username ) || !password){
        return {error:"faltan datos",status:400};
    }
    try {
        let user;
        if(email){
            const users = await getByProperty("email",email,true);
            user = users[0];
        }
        else{
            const users = await getByProperty("username",username,true);
            user = users[0];
        }
        console.log("usurio",user);
        if(!user){
            return {error:"No existe el usurio",status:400};
        }
        console.log("contraseña",password,user.password);
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return {error:"Combinación de usuario y contraseña erroneos",status:400};
        }
        console.log("login user",user)
        const token = jwt.sign({_id:user._id,username:user.username,role:user.role},process.env.JWT_SECRET,{expiresIn: 60 * 60 * 24})
        const userData ={
            _id: user._id,
            username: user.username,
            role: user.role,
        }
        return {token,user:userData};

        
    } catch (error) {
        console.error(error);
        return {error:"Ha habido un error",status:500};
    }
}
const register = async(data) => {
    const {email,username,password,passwordRepeat} = data;
    if(!email || !username || !password || !passwordRepeat){
        return {error:"Falta alguno de los campos"};
    }
    if(password !== passwordRepeat){
        return {error:"Las contraseñas no coinciden"};
    }
    const userData = {
        email,
        username,
        password,
        role:"user"
    }
    const user = await create(userData);
    return user;
}
const create = async(data) =>{
    try {
        const hash = await bcrypt.hash(data.password,10);
        data.password = hash;
        const user = await userModel.create(data);
        return user;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const oldUser = await userModel.findByIdAndUpdate(id,data);
        const user = await userModel.findById(id, userRows);
        console.log("usurio",user);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const user = await userModel.findByIdAndDelete(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addProject = async(userId,projectId)=>{
    try {
        console.log("add project",userId)
        const user = await getById(userId);
        console.log("userss",user);
        if(!user.projects.includes(projectId)){
            user.projects.push(projectId);
            await user.save();
            return user;
        }
        return user;
    } catch (error) {
        console.error(error);
        return {error:"no se ha podido añadir el proyecto"};
    }
}
const removeProject = async(userId,projectId)=>{
    try {
        const user = await getById(userId);
        if(user.projects.includes(projectId)){
            user.projects = user.projects.filter(p => !p.equals(projectId));
            await user.save();
            return user;
        }
        return user;
    } catch (error) {
        console.error(error);
        return {error:"no se ha podido añadir el proyecto"};
    }
}

export const functions = {
    getAll,
    getById,
    getUserData,
    getByProperty,
    create,
    login,
    register,
    update,
    remove,
    addProject,
    removeProject
}

export default functions;