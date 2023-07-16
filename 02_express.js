//Express
//Express is the 3rd Party Module in Nodejs.
//express is the framework (Rest Framework)
//use-> Express Framework use to develop the rest services. Ex- Get,Put,Post,Delete...
//express module,we will download by using either "yarn" or "npm" tool.
/*
    Ex.
        npm install express --save (old commannd)
                    (or)
        yarn add express --save (latest command)
*/
//all the modules download to "node_module" folder in current path.

//import the express module at bellow

let express = require("express"); //import express module by require(),after import seccuessfully it's return an object as- "express"-->which writeen as let express.

//create the rest object by calling express off constructer (express()).
let app =express();
//where app object is the rest objecct
//where app object used to develop  the rest services
//and that rest services are- "Get, Post,Put,Delete.."

app.get("/",(req,res)=>{ //get->app.get("arguments ll be here") for get request.  "/"-->is the default url
    res.status(200).json({"message":"default get requested...!"});
});

app.get("/demo",(req,res)=>{   //get
    res.status(200).json({"message":"data from mongodb soon...!"});
});

app.post("/",(req,res)=>{  //post  "/"--> is the default url
    res.status(200).json({"message":"default post resquest...!"});
});

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data from casandradb soon....!"});
});

app.listen(8080,()=>{
    console.log("server started");
});

//http://localhost:8080/        (Get) (Post)
//http://localhost:8080/demo    (Get) (Post)