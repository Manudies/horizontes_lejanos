import {Router} from "express";
import { isAdmin,isAuthenticated } from "../middlewares/authMiddleware.js";
import userApiController from "../controllers/users/userApiController.js";


const router  = Router();

router.get("/",userApiController.getAll);
router.get("/byproperty",userApiController.getByProperty);
router.get("/bytoken",isAuthenticated,userApiController.getByToken);
router.get("/:id",userApiController.getById);
// router.post("/",isAdmin,userApiController.create); para usar desde el front
router.post("/",userApiController.create);
router.put("/:id",isAdmin,userApiController.updateUser);
router.delete("/:id",isAdmin,userApiController.removeUser);
router.post("/:id/trips",isAuthenticated,userApiController.addTrip);
router.delete("/:id/trips/:tripId",userApiController.removeTrip);

export default router;