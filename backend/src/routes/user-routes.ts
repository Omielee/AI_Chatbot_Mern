import { Router} from "express";
import { getALLUsers } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/",getALLUsers);


export default userRoutes;