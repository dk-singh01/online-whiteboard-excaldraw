

import express from "express";

import { Request, request, response } from "express";
const app = express();

app.post("/api/v1/signup", (req, res)=>{
    const user = req.body.user;
    const password = req.body.password;

    res.json({
        message: "login successfull"
    })


});

app.get("/api/v1/signin", (req:Request,res:Response)=>{


});

app.get("/api/v1/create-room", (req:Request,res:Response)=>{


});

app.get("/", (req:Request,res:Response)=>{


});

app.listen(3000, console.log("listening on port 3000"));