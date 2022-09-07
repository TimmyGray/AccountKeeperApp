import { Router } from "express";
import { UserController } from "../controllers/UserController";

let usercontroller: UserController = new UserController();

export let userrouter: Router = Router();

userrouter.use("/adduser", usercontroller.Add);
userrouter.use("/deleteuser", usercontroller.Delete);
userrouter.use("/edituser", usercontroller.Edit);
userrouter.use("/", usercontroller.Get);