import * as Express from "express";
import { accrouter } from "./routers/accrouter";
import { userrouter } from "./routers/userrouter";

export class Application {
    public constructor() {
        let server = Express();

        server.use("/acc", accrouter);
        server.use("/user", userrouter);

        let port: string = "3000";
        server.listen(port, (port) => {
            console.log(`server up! listen port: ${port}`);
        });
        
    }
}

