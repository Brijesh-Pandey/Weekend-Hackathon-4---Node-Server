var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url==="/welcome"){
        res.writeHead(200).write("Welcome to Dominos!");
        res.end();
    }
    else if(req.url==="/contact"){
        const obj={
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        };
        res.writeHead(200).write(JSON.stringify(obj));
        res.end();
    }
    else{
        res.writeHead(404).end("page not found");
    }
}

httpServer.listen(8081,()=>{console.log("Listning")});

module.exports = httpServer;