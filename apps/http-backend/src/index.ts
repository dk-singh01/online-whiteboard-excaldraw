

import express from "express";
import jwt from "jsonwebtoken";
import  {middleware}  from "./middleware.ts";
import {JWT_SECRETS} from "@repo/backend-common/config";
import {CreateUserSchema} from "@repo/common/types";
import {PrismaClient}  frpm "@repo/db/client";

const app = express();

app.post("/signup", (req, res)=> {
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
       return res.json({
        message: "Incorrect inputs"
       }) 
    }


    res.json({
        message: "login successfull"
    })


});

app.get("/signin", (req, res)=>{
 
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRETS);

    res.json({
        token
    })


});

app.get("/create-room",middleware, (req, res)=>{
    //db call here



    res.json({
        roomId : 1212,
    })


});


app.listen(3000);