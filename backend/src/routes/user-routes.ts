import { Router} from "express";
import { getALLUsers, userLogin, userSignup, verifyUser } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate} from "../utils/validators.js";
import { verifyToken } from "../utils/token_managers.js";

const userRoutes = Router();

userRoutes.get("/",getALLUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken,verifyUser);

export default userRoutes;