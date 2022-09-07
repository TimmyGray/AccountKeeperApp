"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const Express = require("express");
const accrouter_1 = require("./routers/accrouter");
const userrouter_1 = require("./routers/userrouter");
class Application {
    constructor() {
        let server = Express();
        server.use("/acc", accrouter_1.accrouter);
        server.use("/user", userrouter_1.userrouter);
        let port = "3000";
        server.listen(port, (port) => {
            console.log(`server up! listen port: ${port}`);
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=app.js.map