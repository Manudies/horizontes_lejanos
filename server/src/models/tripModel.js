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
    description: String,
    duración: String,
    precio: Number,
    imagen: String,
    itinerario: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const tripModel = mongoose.model("trips",tripSchema);

export default tripModel;