import {Router} from "express";

import userRouter from "./userRouter.js";
import tripRouter from "./tripRouter.js";
import favoriteRouter from "./favoritesRouter.js";
import authRouter from "./authRouter.js";

import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"Hola API"});
})
// router.use("/users",isAuthenticated,userRouter); Para uso desde el front
router.use("/users",userRouter);
router.use("/trips",isAuthenticated,tripRouter);
router.use("/favorites",favoriteRouter);
router.use("/",authRouter);
export default router;