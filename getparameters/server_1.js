"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "ashokIT") {
        next();
    }
    else {
        res.status(500).json({ auth: "Fail" });
    }
};
//get (and authonitication)
app.get("/login", [auth], function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ Login: "sucess" });
    }
    else {
        res.status(401).json({ Login: "Failed" });
    }
    ;
});
//default request
app.get("/", function (req, res) {
    res.sendFile("D:/NodeApp/getparameters/index_1.html"); //index.html path
});
app.listen(8080, function () {
    console.log("server started sucessfully :)");
});
