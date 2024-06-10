import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: String,
    estimatedHours: Number,
    users:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'users'
        }
    ],
    status: {
        type:String,
        enum: ["todo","doing","done"],
        default: "todo"
    },
    project:{
        type: mongoose.Schema.ObjectId,
            ref: 'projects',
            required: true
    },
    recommendedUserQuantity:{
        type: Number,
        default: 1
    },
    creation_date : { type : Date, default: Date.now }
})

const taskModel = mongoose.model("tasks",taskSchema);

export default taskModel;