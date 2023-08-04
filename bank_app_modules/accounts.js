"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//create a module (as we wrote "let app:any = express();")
var accounts = express.Router(); //with the helpof "router()", we create the "accounts module".
//create the get req
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "welcome to accounts module" });
});
//read get-parameters
accounts.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ login: "sucess" });
    }
    else {
        res.status(400).json({ login: "fail" });
    }
    ;
});
//export the module
exports.default = accounts; //by default we can export the account module.
