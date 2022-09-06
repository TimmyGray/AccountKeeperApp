"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccController = void 0;
const ControllerBase_1 = require("../controllers/ControllerBase");
class AccController extends ControllerBase_1.ControllerBase {
    GetAcc(request, response) {
        response.send("Get Method");
    }
    AddAcc(request, response) {
        response.send("Add Method");
    }
    DeleteAcc(request, response) {
        response.send("Delete Method");
    }
    EditAcc(request, response) {
        response.send("Edit Method");
    }
}
exports.AccController = AccController;
//# sourceMappingURL=AccController.js.map