import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    project: {
        type: mongoose.Schema.ObjectId,
        ref: 'projects'
    },
    creation_date : { type : Date, default: Date.now }
});

const invitationModel = mongoose.model("invitations",invitationSchema);

export default invitationModel;