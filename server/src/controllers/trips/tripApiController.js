import invitationController from "./invitationController.js";

const getAll = async(req,res)=>{
    const isAdmin = req.user.role === "admin";
    const userId = isAdmin ? null : req.user._id;
     const invitations = await invitationController.getAll(userId);
    res.json({data:invitations});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const invitation = await invitationController.getById(id);
    res.json({data:invitation});
}



const create = async(req,res)=>{
    const from = req.user._id
    const data = {...req.body,from};
    const invitation = await invitationController.create(data);
    res.json({data:invitation})
}


const remove = async(req,res)=>{
    const id= req.params.id;
    const invitation = await invitationController.remove(id);
    res.json({data:invitation})
}

const acceptInvitation = async (req,res) => {
    const id = req.params.id
    const to = req.user._id
    const invitation = await invitationController.acceptInvitation(id,to);
    res.json({data:invitation})
}
const rejectInvitation = async (req,res) => {
    const id = req.params.id
    const to = req.user._id
    const invitation = await invitationController.rejectInvitation(id,to);
    res.json({data:invitation})
}


export default{
    getAll,
    getById,
    create,
    remove,
    acceptInvitation,
    rejectInvitation
}

