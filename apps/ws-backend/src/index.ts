
import jwt, { JwtPayload } from "jsonwebtoken";
import { WebSocket, WebSocketServer } from "ws";
import {JWT_SECRETS} from "@repo/backend-common/config";

const wss = new WebSocketServer({port:8080});

wss.on("connection", function connection(ws, request){
    const url = request.url; //ws://localhost:3000?token=1324323;
    //url.split  => the url into ["ws://localhost:3000", "token=121323"]
    if(!url){
        return;
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token") || "";
    const decoded = jwt.verify(token, JWT_SECRETS);

    if (decoded == "string"){
        ws.close();
        return;
    }

    if (!decoded || !decoded.userId){
        ws.close();
        return;
    }
    ws.on("message", function message(data){
        ws.send("pong");
    })
})