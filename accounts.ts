import * as express from "express";

let accounts:any = express.Router();

accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to accounts module"});
});


accounts.post("/biswa",(req:any,res:any):any=>{
    res.status(200).json({message:"hey welcome your's accounts ll be add soon"});
});


export default accounts;