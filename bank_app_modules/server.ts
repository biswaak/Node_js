import * as express from "express";


import accounts from "./accounts";
import transaction from "./transaction";  //this all  have to encapsulate or merge by server. so we do import.
import cards from "./cards";

let app:any = express();
app.use("/accounts",accounts);  //use:a predifine function | let think accounts is the object of object module meaan object is the url pattern of the object moduule.
app.use("/transaction",transaction);
app.use("/cards",cards);

app.listen(8080,()=>{
    console.log("server started");
});

//http://localhost:8080/accounts--->accounts module default req ll be executed but there is a problem cause of url ,so we have to mention login url pattern for execute.
//http://localhost:8080/accounts/login

//http://localhost:8080/transaction  token,wish

//http://localhost:8080/cards  














