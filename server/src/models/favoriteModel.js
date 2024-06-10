import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    user:{
            type: mongoose.Schema.ObjectId,
            ref: 'users'
        },

    trip:{
        type: mongoose.Schema.ObjectId,
        ref: 'trips'
    }
});

const favoriteModel = mongoose.model("favorites",favoriteSchema);

export default favoriteModel;