var http = require("http");
const httpServer = http.createServer(handleServer);
const port = 8081;
function handleServer(req, res) {
    if (req.url == '/welcome') {
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.write('Welcome to Dominos!');
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({  
            phone: '18602100000', 
                 email: 'guestcaredominos@jublfood.com' 
        }))
        res.end();
    }
    else {
        res.writeHead(404)
        res.end('404 Page Not Found')
    }
}

httpServer.listen(port, () => {
    console.log(`listening on port => ${port}`)
})
module.exports = httpServer;