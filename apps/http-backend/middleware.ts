import { NextFunction } from "express";
import jwt from jsonwebtoken
import { JWT_SECRETS } from "./src/config";

export function middleware(req:Request, res:Response, next:NextFunction){
    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token, JWT_SECRETS);

    if(decoded.userId){
        //@ts-ignore
        req.userId = decoded.userId;
        next();

    }else{
        res.status(403).json({
            message:"unauthorized"
        })
    }

}