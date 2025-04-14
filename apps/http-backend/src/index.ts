

import express from "express";
import jwt from "jsonwebtoken";
import  middleware  from "../middleware";
import { JWT_SECRETS } from "./config";
const app = express();

app.post("/signup", (req, res)=>{
    const user = req.body.user;
    const password = req.body.password;

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