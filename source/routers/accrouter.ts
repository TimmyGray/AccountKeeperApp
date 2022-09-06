import { Router } from "express";
import { AccController } from "../controllers/AccController";

let acccontroller: AccController = new AccController();
export let accrouter: Router = Router();
accrouter.use("/addacc", acccontroller.AddAcc);
accrouter.use("/editacc", acccontroller.EditAcc);
accrouter.use("/deleteacc", acccontroller.DeleteAcc);
accrouter.use("/", acccontroller.GetAcc);

