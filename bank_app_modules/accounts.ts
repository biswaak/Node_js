import * as express from "express";


//create a module (as we wrote "let app:any = express();")
let accounts:any = express.Router(); //with the helpof "router()", we create the "accounts module".

//create the get req
accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to accounts module"})
});

//read get-parameters
accounts.get("/login",(req:any,res:any):any=>{
    if(req.query.uname === "admin" && req.query.upwd === "admin")
    {
       res.status(200).json({login:"sucess"}) 
    }
    else{
        res.status(400).json({login:"fail"})
    };
})


//export the module
export default accounts;  //by default we can export the account module.










