const WebSocket = require('ws');
const ClientManager = require("./server/clientManager");

const wss = new WebSocket.Server({
    port: 8080
},()=>{
    console.log("Server online");
});

//wss.on("connection", require("./server/clientManager").clientConnected );

let a = new ClientManager(5,4);

console.log(a._socket);

a.print();




