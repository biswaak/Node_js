"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "welcome to accounts module" });
});
accounts.post("/biswa", function (req, res) {
    res.status(200).json({ message: "hey welcome your's accounts ll be add soon" });
});
exports.default = accounts;
