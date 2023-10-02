const http = require('http');
const port = 4000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`<h1>Mst Surnaly Akter</h1>`);
    return res.end();
})


server.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
})