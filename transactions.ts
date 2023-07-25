//create the sub-module

import * as express from "express";

let transactions:any = express.Router();  //create a module | note:-router() is the predifine module function ,which available in express module.

transactions.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"transaction soon!!"});
});

transactions.get("/biswa",(req:any,res:any)=>{
    res.status(200).json({message:"wel come to biswa for nodejs :)"})
});

export default transactions;