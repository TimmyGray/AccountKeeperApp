import * as Express from "express";
import { accrouter } from "./routers/accrouter";

export class Application {
    public constructor() {
        let server = Express();

        server.use("/acc", accrouter);

        let port: string = "3000";
        server.listen(port)
        console.log(`server up! listen port: ${port}`);
    }
}

