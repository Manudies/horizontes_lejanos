
import tripModel from "../../models/tripModel.js";

const getAll = async()=> {
    try {
        const trips = await tripModel.find();
        return trips;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const trip = await tripModel.findById(id);
        return trip;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

//los viajes no se pueden editar, solo crear y borrar por el admin

const create = async(data) =>{
   try {
       const trip = await tripModel.create(data);
       return trip;
   } catch (error) {
       console.error(error); 
        return null;  
    }
}

const remove = async(id) =>{
    try {
        const trips = await tripModel.findByIdAndDelete(id);
        return trips;
    } catch (error) {
        console.error(error);
        return null;
    }
}



export const functions = {
    getAll,
    getById,
    create,
    remove,
}

export default functions;