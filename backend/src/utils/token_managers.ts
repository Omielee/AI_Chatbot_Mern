import { rejects } from "assert";
import exp from "constants";
import { NextFunction, response } from "express";
import { param } from "express-validator";
import jwt from "jsonwebtoken";
import { resolve } from "path";
import { Request,Response } from "express";
export const createToken = (id: String, email: String, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
}

export const verifyToken = async (
    req:Request,
    res:Response,
    next:NextFunction
    ) => {
        const token = req.signedCookies['${COOKIE_NAME']
        if (!token || token.trim()===""){
            return res.status(401).json({message:"Token not received"});
        }
        return new Promise<void>((resolve,reject)=>{
            return jwt.verify(token,process.env.JWT_SECRET,(err,success) =>{
                if(err){
                    reject(err.message);
                    return res.status(401).json({message:"Token Expired"});
                }else{
                    resolve();
                    res.locals.jwtData = success;
                    return next();
                }
            })
        })
    }