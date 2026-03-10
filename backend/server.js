const http=require('http');
const app=require('./src/app')
const server=http.createServer(app)
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})