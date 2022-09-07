import { ControllerBase } from "../controllers/ControllerBase";

export class UserController extends ControllerBase {

    Get(request, response) {
        response.send("Get User");
    }
    Add(request, response) {
        response.send("Add User");
    }
    Delete(request, response) {
        response.send("Delete User");
    }
    Edit(request, response) {
        response.send("Edit User");
    }

}