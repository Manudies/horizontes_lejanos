import {Router} from "express";

import taskApiController from "../controllers/tasks/taskApiController.js";


const router  = Router();

router.get("/",taskApiController.getAll);
router.get("/:id",taskApiController.getById);
router.post("/",taskApiController.create);
router.put("/:id",taskApiController.update);
router.delete("/:id",taskApiController.remove);
router.post("/:id/status",taskApiController.changeStatus);
router.post("/:id/user",taskApiController.addUser);
router.delete("/:id/user",taskApiController.removeUser);

export default router;