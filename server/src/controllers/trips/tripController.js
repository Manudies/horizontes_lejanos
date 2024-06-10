
import invitationModel from "../../models/invitationModel.js";
import projectController from "../projects/projectController.js";
import userController from "../users/userController.js";
//import { getTasksForinvitation } from "../../utils/claudio.js";
const getAll = async (userId = null) => {
    try {
        if (!userId) {
            const invitations = await invitationModel.find();
            return invitations;
        }
        const sentInvitations = await invitationModel.find({from:userId});
        const receivedInvitations = await invitationModel.find({to:userId});
        await Promise.all(sentInvitations.map(async (invitation) => {
            await invitation.populate({
                path:"from",
                select: { username:1, email:1, role:1 }
            });
            await invitation.populate({
                path:"to",
                select: { username:1, email:1, role:1 }
            });
            await invitation.populate("project");
            return invitation;
        }))
        await Promise.all(receivedInvitations.map(async (invitation) => {
            await invitation.populate({
                path:"from",
                select: { username:1, email:1, role:1 }
            });
            await invitation.populate({
                path:"to",
                select: { username:1, email:1, role:1 }
            });
            await invitation.populate("project");
            return invitation;
        }))
        const userinvitations = {
            sent: sentInvitations,
            received: receivedInvitations
        }
        return userinvitations;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async (id) => {
    try {
        const invitation = await invitationModel.findById(id);
        if (!invitation) {
            return null;
        }
        return invitation;
    } catch (error) {
        console.error(error);
        return null;

    }
}

const create = async (data) => {
    try {
        const userFrom = await userController.getById(data.from);
        const userTo = await userController.getById(data.to);
        const project = await projectController.getById(data.project);
        if (!userFrom || !userTo || !project) {
            return null;
        }
        // if from not in project or to in project
        if (!project.users.find(u => u.equals(userFrom._id)) || project.users.find(u => u.equals(userTo._id))) {
            console.log("from not in project or to in project");
            return null;
        }
        // if already exists an invitation with the same project and to retun
       const oldInvitation = await invitationModel.findOne({project:data.project,to:data.to});
       if(oldInvitation){
           return null;
       }
        const invitation = await invitationModel.create(data);
        return invitation;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const acceptInvitation = async (id,to) => {
    try {
        const invitation = await invitationModel.findById(id);
        const invitationTo = invitation.to;
        if (!invitationTo.equals(to)) {
            return null;
        }
        const project = await projectController.getById(invitation.project);
        projectController.addUser(project, invitation.to);
        await invitationModel.findByIdAndDelete(id);
        return invitation;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const rejectInvitation = async (id) => {
    try {
        const invitation = await invitationModel.findByIdAndDelete(id);
        return invitation;
    } catch (error) {
        console.error(error);
        return null;
    }
}


const remove = async (id) => {
    try {
        const invitation = await invitationModel.findByIdAndDelete(id);
        return invitation;
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
    acceptInvitation,
    rejectInvitation
}

export default functions;