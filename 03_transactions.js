"use strict";
//create the sub-module
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router(); //create a module | note:-router() is the predifine module function ,which available in express module.
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transaction soon!!" });
});
transactions.get("/biswa", function (req, res) {
    res.status(200).json({ message: "wel come to biswa for nodejs :)" });
});
exports.default = transactions;
