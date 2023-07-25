//this server.ts is not acctually a server ,its example of how you have to encapsulate or merge all file in a file or how to import all file in this file and run.

import * as express from "express";

import transactions from "./transactions";

import accounts from "./accounts";

let app:any=express();
app.use("/module1",transactions);
app.use("/module2",accounts);

app.listen(8080,()=>{
    console.log("server started");
}); 

//http://localhost:8080/module1  -> control gies to transaction
//http://localhost:8080/module1/biswa -> control goes to the /biswa url part of the transaction 
//http://localhost:8080/module2  (Geet)->control goes to accounts
//http://localhost:8080/module2  (post)