"use strict";
//http://localhost:8080/login?uname=admin&upwd=admin  ->we have to read this uname & upwd.
//req.query.uname
//req.query.upwd
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ message: "sucessful" });
    }
    else {
        res.status(401).json({ message: "fail" });
    }
});
app.listen(8080, function () {
    console.log("server started :)");
});
