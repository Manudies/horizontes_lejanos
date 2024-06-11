import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    origen: {
        type:String,
        // required:true
    },
    destino: {
        type:String,
        // required:true
    },
    description: String,
    duración: String,
    precio: Number,
})

const tripModel = mongoose.model("trips",tripSchema);

export default tripModel;