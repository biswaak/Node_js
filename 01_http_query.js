//http:localhost:8080/?uname=ashokit&upwd=ashokit 
 //http-module
 //localhost:8080- domain name
 //there are 2 query-parameter are here 1- uname 2-upwd

 //impport http module
 let http=require("http");
const { Server } = require("https");

 //import url module
 //url module used to read the query parameters
 //url module also predifine module(we don't need to  download it)
 //url module available along with the node software
 let url=require("url");

 //create the Http server
 let server=http.createServer((req,res)=>{
    //set th MIME type
    //MIME type-Communication language between cleint and server called as MIME type ex- [Clinet]-->HINDI<---[Server]  -here hindi is a mie type
    res.writeHead(200,{'content-type':'text/html'}); //write head code use to set  and read the MIME type status code like (200-known as succesful code mean "OK")
                    //content-type- is the key for communication
                    //text/html-is the language by which we talk, meaan here HTML is the MIME type.
   
    let obj=url.parse(req.url,true).query; // url module - to parse the request
                        //(req.url)->this original url supply to parse and it'll avaialable in url module              
                        //true - it's a flag for supply parse(req.url)
                        //after parse we need to read the total url ,so we need "query" as a property to read the url.
                        //after read it's return an object "let obj" and through this "obj" we need to read "uid and upd"
    
    if(obj.uname === "ashokit" && obj.upwd==="ashokit"){
        res.write("<h1>Login success</h1>");
    }
    else{
        res.write("<h2>Login Fail</h2>");
    }
    res.end(); //lock
});


server.listen(8080);
console.log("server listeing the port no.8080");