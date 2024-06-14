import userController from "./userController.js";

const getAll = async(req,res)=>{
    const query = req.query.query;
    const users = await userController.getAll(query);
    res.json({data:users});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const user = await userController.getById(id);
    res.json({data:user});
}
const getByToken = async (req,res) =>{
    const id = req.user._id;
    const user = await userController.getById(id);
    res.json({data:user});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const users = await userController.getByProperty(property,value);
    res.json({data:users})
}

const register = async(req,res)=>{
    const user = await userController.register(req.body);
    if(!user){
        return res.json({error:"No se ha podido registrar el usuario"});
    }

    if(user.error){
        return res.json({error:user.error});
    }
    res.json({data:user})
}
const login = async(req,res) => {
    const data = await userController.login(req.body);
    if(data.error){
        return res.status(data.status).json({error:data.error});
    }
    res.json(data)
}
const create = async(req,res)=>{
    const user = await userController.create(req.body);
    res.json({data:user})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const user = await userController.update(id,req.body);
    res.json({data:user})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const user = await userController.remove(id);
    res.json({data:user})
}

const addTrip = async(req,res)=>{
    const userId = req.params.id;
    const tripId = req.body.tripId;
    const loggedUser = req.user;
    console.log("userId", userId)
    console.log("usuario logueado", loggedUser._id)
    if(loggedUser._id.equals(userId) || loggedUser.role === "admin"){
        const user = await userController.addTrip(userId,tripId);
        res.json({data:user})
    }
    res.json({error:"no tienes permisos para anadir trips"})
}

const removeTrip = async(req,res)=>{
    const userId = req.params.id;
    const tripId = req.body.tripId;
    const user = await userController.removeTrip(userId,tripId);
    res.json({data:user})
}

export default{
    getAll,
    getById,
    getByToken,
    getByProperty,
    login,
    register,
    create,
    update,
    remove,
    addTrip,
    removeTrip
}

