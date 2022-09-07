"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccController = void 0;
const ControllerBase_1 = require("../controllers/ControllerBase");
class AccController extends ControllerBase_1.ControllerBase {
    Get(request, response) {
        response.send("Get Acc");
    }
    Add(request, response) {
        response.send("Add Acc");
    }
    Delete(request, response) {
        response.send("Delete Acc");
    }
    Edit(request, response) {
        response.send("Edit Acc");
    }
}
exports.AccController = AccController;
//# sourceMappingURL=AccController.js.map