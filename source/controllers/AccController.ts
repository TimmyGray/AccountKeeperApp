import { ControllerBase } from "../controllers/ControllerBase";
import * as Express from "express";
import { Account } from "../models/Account";

export class AccController extends ControllerBase {
    GetAcc(request, response) {
        response.send("Get Method");
    }
    AddAcc(request,response) {
        response.send("Add Method");
    }
    DeleteAcc(request,response) {
        response.send("Delete Method");
    }
    EditAcc(request, response) {
        response.send("Edit Method");
    }

}