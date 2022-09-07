"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const ControllerBase_1 = require("../controllers/ControllerBase");
class UserController extends ControllerBase_1.ControllerBase {
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
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map