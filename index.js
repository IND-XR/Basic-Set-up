const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");  
// const chat = require("./models/chat.js")

main()
.then((res)=>{
    console.log("connection successful",res)
})
.catch((err)=>{
    console.log("error",err)
})


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  const app = express();
  const PORT = 3000;
  
  const path = require("path");
  

  app.set("views",path.join(__dirname,"views"));
  app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.send("Root is Working");
})


app.get("/profile",(req,res)=>{
    res.send("Root path is Working");
})


app.listen(PORT, (error)=>{
    if(!error)
        console.log("Server is successful Running" + PORT)
    else
    console.log("Error",error)
})