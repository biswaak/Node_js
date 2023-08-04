"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts_1 = require("./accounts");
var transaction_1 = require("./transaction"); //this all  have to encapsulate or merge by server. so we do import.
var cards_1 = require("./cards");
var app = express();
app.use("/accounts", accounts_1.default); //use:a predifine function | let think accounts is the object of object module meaan object is the url pattern of the object moduule.
app.use("/transaction", transaction_1.default);
app.use("/cards", cards_1.default);
app.listen(8080, function () {
    console.log("server started");
});
//http://localhost:8080/accounts--->accounts module default req ll be executed but there is a problem cause of url ,so we have to mention login url pattern for execute.
//http://localhost:8080/accounts/login
//http://localhost:8080/transaction  token,wish
//http://localhost:8080/cards  
