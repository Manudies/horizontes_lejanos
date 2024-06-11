
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

const update = async (id, data) => {
    try {
        await tripModel.findByIdAndUpdate(id, data);

        const trip = await tripModel.findById(id);
        return trip;
    } catch (error) {
        console.error(error);
        return null;
    }
}

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
    update,
    create,
    remove,
}

export default functions;