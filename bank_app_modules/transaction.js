"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express.Router();
//authorization-1
var auth1 = function (req, res, next) {
    var allheaders = req.headers;
    var token = allheaders.token;
    if (token === "abc123") {
        next();
    }
    else {
        res.status(400).json({ "auth1": "failed" });
    }
};
//authorization-2
var auth2 = function (req, res, next) {
    var allheaders = req.headers;
    var wish = allheaders.wish; //as like token you can put anything as like message.
    if (wish === "hello") {
        next();
    }
    else {
        res.status(400).json({ "auth2": "failed" });
    }
};
//get request
transaction.get("/", [auth1, auth2], function (req, res) {
    res.status(200).json({ message: "welcome to transaction module" });
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
exports.default = transaction;
