import {Router} from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chatroutes.js";

const appRouter = Router();

appRouter.use("/user",userRoutes); //domain/api/v1/user
appRouter.use("/chat",chatRoutes);//domain/api/v1/chat
export default appRouter