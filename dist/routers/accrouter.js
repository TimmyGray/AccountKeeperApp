"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accrouter = void 0;
const express_1 = require("express");
const AccController_1 = require("../controllers/AccController");
let acccontroller = new AccController_1.AccController();
exports.accrouter = (0, express_1.Router)();
exports.accrouter.use("/addacc", acccontroller.Add);
exports.accrouter.use("/editacc", acccontroller.Edit);
exports.accrouter.use("/deleteacc", acccontroller.Delete);
exports.accrouter.use("/", acccontroller.Get);
//# sourceMappingURL=accrouter.js.map