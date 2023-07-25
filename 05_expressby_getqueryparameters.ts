//http://localhost:8080/login?uname=admin&upwd=admin  ->we have to read this uname & upwd.
//req.query.uname
//req.query.upwd

import * as express from "express";
let app:any = express();

app.get("/login",(req:any,res:any):any=>{
    if(req.query.uname === "admin" && req.query.upwd === "admin")
    {
        res.status(201).json({message:"sucessful"});
    }
    else
    {
        res.status(401).json({message:"fail"});
    }
});

app.listen(8080,()=>{
    console.log("server started :)");
});