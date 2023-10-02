const http = require('http');
const fs = require('fs');
const port = 4000;

// create file starts here

fs.appendFile(',/index.txt', 'Mst Surnaly Akter', err =>{
    if(err) throw err;
    console.log(`Save!`);
} )

fs.writeFile('./text.txt', "hello plain text", err=>{
    if(err) throw err;
    console.log("save writefile!");
})

fs.open('./hell.txt', "w", err =>{
    if(err) throw err;
    console.log(`save open method`);
})
// create file end here


// delete file starts here
fs.unlink('./delete.txt', err =>{
    if(err) throw err;
    console.log(`delete file`);
})
// delete file ends here


// rename file starts here
fs.rename('./name.txt', './rename.txt', err =>{
    if(err) throw err;
    console.log(`rename file name`);
})

// rename file ends here

const server = http.createServer((req, res)=>{
    // file read
    fs.readFile("./index.html", (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end(`<h1>404 Not Found</h1>`)
        }

        res.writeHead(200, {'Content-Type':'text/html'});
        return res.end(data)
    })
})


server.listen(port , ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})