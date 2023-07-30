"use strict";
//http:/localhost:8080/login?uname="admin"&upwd="admin"
//here "http:/localhost:8080" -> "http" is the protocol, "Local host" is the host, and "8080" is the port num.
//login? -> is the url parameter and , uname="admin"&upwd="admin" is the -> 2 query parameter
//qstn ll or our work is to be to read the "uname & upwd"???
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//rest services,GET, POST, PUT, DELETE.....
var app = express();
//Authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "ashokIT") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
//get request
app.get("/login", [auth], function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") { //this if(){} to else{} statement is called "Authonitication"
        res.status(201).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "failed" });
    }
    ;
});
app.listen(8080, function () {
    console.log("server started successfully !!!");
});
