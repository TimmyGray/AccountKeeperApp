import { Router } from "express";
import { AccController } from "../controllers/AccController";

let acccontroller: AccController = new AccController();

export let accrouter: Router = Router();

accrouter.use("/addacc", acccontroller.Add);
accrouter.use("/editacc", acccontroller.Edit);
accrouter.use("/deleteacc", acccontroller.Delete);
accrouter.use("/", acccontroller.Get);

