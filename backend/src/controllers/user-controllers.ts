import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import {hash,compare} from 'bcrypt';

export const getALLUsers = async(
    req:Request, 
    res:Response,
    next: NextFunction
) => {
    try {
        // get all users directly from database
        const users = await User.find();
        return res.status(200).json({message:"ok",users});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"error",cause: error.message});
    }
    
}

export const userSignup = async(
    req:Request, 
    res:Response,
    next: NextFunction
) => {
    try {
        // user signup
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(401).send("User already registerd");
        const hashedPassword = await hash(password,10);
        const user = new User({name,email,password:hashedPassword});
        await user.save();
        return res.status(201).json({message:"sign up ok",id:user._id.toString()});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"error",cause: error.message});
    }
    
}

export const userLogin = async(
    req:Request, 
    res:Response,
    next: NextFunction
) => {
    try {
        // user login
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).send("User not registered");
        }
        const isPasswordCorrect = await compare(password,user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }

        return res.status(201).json({message:"login successfully",id:user._id.toString()});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"error",cause: error.message});
    }
    
}