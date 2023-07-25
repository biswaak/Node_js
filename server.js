"use strict";
//this server.ts is not acctually a server ,its example of how you have to encapsulate or merge all file in a file or how to import all file in this file and run.
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transactions_1.default);
app.use("/module2", accounts_1.default);
app.listen(8080, function () {
    console.log("server started");
});
//http://localhost:8080/module1  -> control gies to transaction
//http://localhost:8080/module1/biswa -> control goes to the /biswa url part of the transaction 
//http://localhost:8080/module2  (Geet)->control goes to accounts
//http://localhost:8080/module2  (post)
