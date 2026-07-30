import express, { json } from "express";
import { appendFileSync } from "fs";

const app = express();

app.use(json());

app.post("/halo", (req,res)=>{

    console.log(req.body);

    appendFileSync(
        "halo.log",
        new Date()+" "+JSON.stringify(req.body)+"\n"
    );



    res.send("OK");
});


app.listen(6000,()=>{
    console.log("Server running");
});