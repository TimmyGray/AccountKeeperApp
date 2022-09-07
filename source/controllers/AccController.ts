import { ControllerBase } from "../controllers/ControllerBase";
import * as Express from "express";
import { Account } from "../models/Account";

export class AccController extends ControllerBase {
    Get(request, response) {
        response.send("Get Acc");
    }
    Add(request,response) {
        response.send("Add Acc");
    }
    Delete(request,response) {
        response.send("Delete Acc");
    }
    Edit(request, response) {
        response.send("Edit Acc");
    }

}