//Http server
//"Http" is the inbuild or predefine(No need to Download) module in Nodejs, used to create Http server
//No need to download http module
//http module Already available along with the node Software

//step-1 : Import module (Http module)
//step-2 : require() Function used to import the modules

let http = require("http"); // Require(Http)->when import http module  sucessfully ,then it's return a object -Let http-> (Http is the Object)

//create server is the funtion in the http module , helps to create the http server
//req-> To recive the data from Client(angular,react,vujs are client application) | Res-  Send the reply to cleint.
let server = http.createServer((req,res)=>{    //req and res are the two predifine object.
    res.write("welcome to Http server");
    res.end();  //end()->Lock the Widnows Response Object(after send the res(reply) or req luck thw windows object by end ().
}); 

server.listen(8080);
console.log("server listeing the port no.8080");
