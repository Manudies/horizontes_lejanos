import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    destino: {
        type:String,
        // required:true
    },
    descripcion: String,
    duración: String,
    precio: Number,
    imagen: String,
    itinerario: [Object],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const tripModel = mongoose.model("trips",tripSchema);

export default tripModel;