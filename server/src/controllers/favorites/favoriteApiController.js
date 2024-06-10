import taskController from "./taskController.js";

const getAll = async(req,res)=>{
    const projectId = req.query.projectId;
    const tasks = await taskController.getAll(projectId);
    res.json({data:tasks});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const task = await taskController.getById(id);
    res.json({data:task});
}


const create = async(req,res)=>{
    const task = await taskController.create(req.body);
    res.json({data:task})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const task = await taskController.update(id,req.body);
    res.json({data:task})
}
const changeStatus = async(req,res)=>{
    const id = req.params.id
    const status = req.body.status;
    const task  = await taskController.changeStatus(id,status);
    res.json({data:task})
}
const remove = async(req,res)=>{
    const id= req.params.id;
    const task = await taskController.remove(id);
    res.json({data:task})
}

const addUser = async(req,res)=>{
    const taskId = req.params.id;
    const userId = req.body.userId;
    const task = await taskController.addUser(taskId,userId);
    res.json({data:task})
}

const removeUser = async(req,res)=>{
    const taskId = req.params.id;
    const userId = req.body.userId;
    const task = await taskController.removeUser(taskId,userId);
    res.json({data:task})
}


export default{
    getAll,
    getById,
    create,
    update,
    changeStatus,
    remove,
    addUser,
    removeUser,
}

