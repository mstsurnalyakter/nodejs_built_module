const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 4000;



const server = http.createServer((req, res)=>{
    const q = url.parse(req.url, true);
    const fileName = "." + q.pathname;
    fs.readFile(fileName, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end(`<h1>404 Not Found</h1>`);
        }
        res.writeHead(404, {'Content-Type':'text/html'});
        return res.end(data);
    })
})

server.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})