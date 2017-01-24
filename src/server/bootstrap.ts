import {Application} from "./application.module";
import {httpServer} from "typeix";

const port = 9000;

console.log(`Running server at port ${port}...`);

httpServer(Application, port);