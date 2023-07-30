import * as express from "express";

let app:any = express();

//authorization
let auth = (req:any,res:any,next:any):any=>{
    let allHeaders = req.headers;
    if(allHeaders.token === "ashokIT")
    {
        next();
    }
    else{
        res.status(500).json({auth:"Fail"});
    }
};

//get (and authonitication)
app.get("/login",[auth],(req:any,res:any):any=>{
    if(req.query.uname === "admin" && req.query.upwd === "admin")
    {
       res.status(200).json({Login:"sucess"});
    }
    else{
        res.status(401).json({Login:"Failed"});
    };
});

//default request
app.get("/",(req:any,res:any):any=>{
    res.sendFile("D:/NodeApp/getparameters/index_1.html")  //index.html path
});


app.listen(8080,()=>{
    console.log("server started sucessfully :)");
});