//import the express module
const express = require("express");

//create the REST Object
const app = express();

//Create the get Request
app.get("/demo",(req,res)=>{
    res.send({"message":"welcome to demo1 request"});
});

//assign the port no
//let port = process.env.PORT  //process.env.PORT -: this port no assign by AWS or Herouk server 
let port = process.env.PORT  || 8080; //8080:- let take a local port no ,but why? cause, we don't know the port number of aws and herouk . if that's port num failed then we can use local port num 8080
app.listen(port,()=>{
    console.log("server started !!!");
})