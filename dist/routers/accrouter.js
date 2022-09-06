"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accrouter = void 0;
const express_1 = require("express");
const AccController_1 = require("../controllers/AccController");
let acccontroller = new AccController_1.AccController();
exports.accrouter = (0, express_1.Router)();
exports.accrouter.use("/addacc", acccontroller.AddAcc);
exports.accrouter.use("/editacc", acccontroller.EditAcc);
exports.accrouter.use("/deleteacc", acccontroller.DeleteAcc);
exports.accrouter.use("/", acccontroller.GetAcc);
//# sourceMappingURL=accrouter.js.map