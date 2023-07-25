//import express module in ts
import * as express from "express";  //this is the way of import

//create the rest object by calling constructor-> express
let app:any = express(); //app object return the dat-type-any
//app object used to devlop the rest services
//ex- Get ,post ,Put ,Delete...


//get Request
app.get("/ashokit",(req:any,res:any):any=>{  //the last one (any type) is for return type function
    res.status(200).json({"message":"welcome to typescript with Nodejs"});
});


//assign the port number
app.listen(8080,()=>{
    console.log("server started successfully!!! :)");
});

//command of convert ts to js file automatically
//command-> tsc 03_express.ts
/*
//import express module
import * as express from "express";


let app:any = express();
//app object used to develop the rest services
//Ex.  GET, POST, PUT , DELETE,....


//get request
app.get("/ashokit",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to typescript with nodejs"});
});


//assign the port no
app.listen(8080,()=>{
    console.log("server started successfully !!!");
});
*/