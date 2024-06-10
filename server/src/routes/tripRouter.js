import {Router} from "express";

import tripApiController from "../controllers/trips/tripApiController.js";


const router  = Router();

router.get("/",tripApiController.getAll);
router.get("/:id",tripApiController.getById);
router.post("/",tripApiController.create);
router.delete("/:id",tripApiController.remove);


export default router;