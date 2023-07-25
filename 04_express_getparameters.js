"use strict";
//read get parameters in express js
Object.defineProperty(exports, "__esModule", { value: true });
//http://localhost:8080/login/uname/admin/upwd/admin   -> this ll be pattern like this.
var express = require("express");
var app = express();
app.get("/login/uname/:uname/upwd/:upwd", function (req, res) {
    if (req.params.uname === "admin" && req.params.upwd === "admin") {
        res.status(200).json({ login: "sucess" });
    }
    else {
        res.status(400).json({ login: "fail" }); //you can put or change status code according to it or as according to situation for only run purpose
    }
});
app.listen(8080, function () {
    console.log("server started successfully on port no.8080!");
});
