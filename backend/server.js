const http=require('http');
const { Server } = require("socket.io");
const app=require('./src/app')
const server=http.createServer(app)
const io = new Server(server,{
    cors:{ origin:"*" }
});

app.set("io", io);   
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})