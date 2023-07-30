//http:/localhost:8080/login?uname="admin"&upwd="admin"
//here "http:/localhost:8080" -> "http" is the protocol, "Local host" is the host, and "8080" is the port num.
//login? -> is the url parameter and , uname="admin"&upwd="admin" is the -> 2 query parameter
//qstn ll or our work is to be to read the "uname & upwd"???

//import express module
import * as express from "express";

//rest services,GET, POST, PUT, DELETE.....
let app:any = express();

//Authorization
let auth = (req:any,res:any,next:any):any=>{  //next()-with this function we can judgement. 
let allHeaders = req.headers;
if(allHeaders.token === "ashokIT"){
    next();
}
else{
    res.status(500).json({auth:"fail"});
}
};

//get request
app.get("/login",[auth],(req:any,res:any):any=>{
    if(req.query.uname === "admin" && req.query.upwd === "admin"){   //this if(){} to else{} statement is called "Authonitication"
        res.status(201).json({login:"success"});
    }
    else{
        res.status(401).json({login:"failed"});
    };
});

app.listen(8080,()=>{
    console.log("server started successfully !!!");
});