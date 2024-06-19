import tripController from "./tripController.js";

const getAll= async(req,res)=>{
    const trips = await tripController.getAll();
    res.json({data:trips});
} 

const getById = async (req,res) =>{
    const id = req.params.id
    const trip = await tripController.getById(id);
    res.json({data:trip});
}
const update = async(req,res)=>{
    const id =req.params.id;
    const trip = await tripController.update(id,req.body);
    res.json({data:trip})
}
const getByProperty = async(req,res)=>{
    const {property,value}=req.query;
    const trips = await tripController.getByProperty(property,value);
    res.json({data:trips});
}

const create= async(req,res)=>{
    const trip = await tripController.create(req.body);
    res.json({data:trip});
}

const remove= async(req,res)=>{
    const id= req.params.id
    const trip = await tripController.remove(id);
    res.json({data:trip});
} 

export default {
    getAll,
    getById,
    update,
    create,
    getByProperty,
    remove
}

