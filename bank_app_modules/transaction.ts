import *  as express from "express";

let transaction :any = express.Router();

//authorization-1
const auth1:any = (req:any,res:any,next:any):any=>{
    let allheaders:any = req.headers;
    let  token = allheaders.token;
    if(token === "abc123"){
        next();
    }
    else{
        res.status(400).json({"auth1":"failed"});
    }
};

//authorization-2
const auth2:any = (req:any,res:any,next:any):any=>{
    let allheaders:any = req.headers;
    let  wish = allheaders.wish;  //as like token you can put anything as like message.
    if(wish === "hello"){
        next();
    }
    else{
        res.status(400).json({"auth2":"failed"});
    }
};

//get request
transaction.get("/",[auth1,auth2],(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to transaction module"});
});

//read get-parameters mdule
/* : i create this , sir didin't create it
transaction.get("/login",(req:any,res:any):any=>{
    if(req.query.uname === "admin" && req.query.upwd === "admin")
    {
        res.status(200).json({transaction:"sucess"})
    }
    else{
        res.status(400).json({transaction:"failed"})
    };
});
*/
//export module
export default transaction;











