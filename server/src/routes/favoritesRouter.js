import {Router} from "express";

import favoriteApiController from "../controllers/favorites/favoriteApiController.js";


const router  = Router();

router.get("/",favoriteApiController.getAll);
router.get("/:id",favoriteApiController.getById);
router.post("/",favoriteApiController.create);
router.put("/:id",favoriteApiController.update);
router.delete("/:id",favoriteApiController.remove);

export default router;