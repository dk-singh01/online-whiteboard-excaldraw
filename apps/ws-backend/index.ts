

import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection", function connection(ws){
    ws.on("error", console.log("error"));
    ws.on("message", function(data){
        console.log("recieved : %s", data);
        ws.send("something");
    })
})