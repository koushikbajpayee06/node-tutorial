const express = require("express");
const connectDB = require("./config/database.js");
const app = express();

connectDB().then(()=>{
    console.log("Database Connection established...");
    app.listen(3000,()=>{
        console.log("server is successfully listening on port-3000");
    });
})
.catch((err)=>{
    console.error("Database cannot be connected!!!");
    process.exit(1)
})




