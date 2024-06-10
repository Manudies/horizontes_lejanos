import {Router} from "express";

import invitationApiController from "../controllers/invitations/invitationApiController.js";


const router  = Router();

router.get("/",invitationApiController.getAll);
router.get("/:id",invitationApiController.getById);
router.post("/",invitationApiController.create);
router.delete("/:id",invitationApiController.remove);
router.post("/:id/accept",invitationApiController.acceptInvitation);
router.post("/:id/reject",invitationApiController.rejectInvitation);

export default router;