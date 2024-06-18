import {Router} from "express";

import tripApiController from "../controllers/trips/tripApiController.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";



const router  = Router();

router.get("/",tripApiController.getAll);
router.get("/byproperty",tripApiController.getByProperty);
router.get("/:id",tripApiController.getById);
router.post("/",isAdmin,tripApiController.create);
router.put("/:id",isAdmin,tripApiController.update);
router.delete("/:id",isAdmin,tripApiController.remove);


export default router;