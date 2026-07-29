const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.post("/halo", (req,res)=>{

    console.log(req.body);

    fs.appendFileSync(
        "halo.log",
        new Date()+" "+JSON.stringify(req.body)+"\n"
    );

    res.send("OK");
});


app.listen(5000,()=>{
    console.log("Server running");
});