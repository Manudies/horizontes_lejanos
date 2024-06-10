import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role : {
        type:String,
        enum : ["user","admin"],
        default: "user"
    },
    projects:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "projects"
        }
    ]
})

const userModel = mongoose.model("users",userSchema);

export default userModel;