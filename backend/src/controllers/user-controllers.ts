import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from 'bcrypt';
import { TokenExpiredError } from "jsonwebtoken";
import { createToken } from "../utils/token_managers.js";
import { COOKIE_NAME } from "../utils/constants.js";


export const getALLUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // get all users directly from database
        const users = await User.find();
        return res.status(200).json({ message: "ok", users });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error", cause: error.message });
    }

}

export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // user signup
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(401).send("User already registerd");
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        //create token and store cookie
        res.clearCookie(COOKIE_NAME,{
            httpOnly:true,
            domain:"localhost",
            signed:true,
            path:"/",
        });

        const token = createToken(user.id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true, });

        return res.status(201).json({ message: "sign up ok", name:user.name, email:user.email});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error", cause: error.message });
    }

}

export const userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // user login
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("User not registered");
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }

        res.clearCookie(COOKIE_NAME,{
            httpOnly:true,
            domain:"localhost",
            signed:true,
            path:"/",
        });



        const token = createToken(user.id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true, });

        return res.status(200).json({ message: "login successfully", name:user.name, email:user.email});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error", cause: error.message });
    }

}

export const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // user token check
        const user = await User.findById(res.locals.jwtData.email);
        if (!user) {
            return res.status(401).send("User not registered or token malfunctioned");
        }
        console.log(user._id.toString(),res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id){
            return res.status(401).send("Permission didn't match");
        }

        return res.status(200).json({ message: "login successfully", name:user.name, email:user.email});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error", cause: error.message });
    }

}