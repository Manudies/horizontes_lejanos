import {Router} from "express";

import userRouter from "./userRouter.js";
import projectRouter from "./projectRouter.js";
import taskRouter from "./taskRouter.js";
import authRouter from "./authRouter.js";
import invitationRouter from "./invitationRouter.js";

import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/users",isAuthenticated,userRouter);
router.use("/projects",isAuthenticated,projectRouter);
router.use("/tasks",taskRouter);
router.use("/",authRouter);
router.use("/invitations",isAuthenticated,invitationRouter);
export default router;