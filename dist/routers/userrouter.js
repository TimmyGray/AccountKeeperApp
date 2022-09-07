"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userrouter = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
let usercontroller = new UserController_1.UserController();
exports.userrouter = (0, express_1.Router)();
exports.userrouter.use("/adduser", usercontroller.Add);
exports.userrouter.use("/deleteuser", usercontroller.Delete);
exports.userrouter.use("/edituser", usercontroller.Edit);
exports.userrouter.use("/", usercontroller.Get);
//# sourceMappingURL=userrouter.js.map