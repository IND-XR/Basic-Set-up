const mongoose = require("mongoose");
const chat = require("./models/chat.js")

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

let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send ne notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me js callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date(),
    },
];


chat.insertMany(allChats);

// chat.insertMany([ 
//     {
//     from : " neha",
//     to:"priyas",
//     msg :" send me your exam sheets",
//     created_at: new Date(),
// },
// {
//     from : " neha",
//     to:"priyas",
//     msg :" send me your exam sheets",
//     created_at: new Date(),
// }

// ]);

//   let chat1 = new chat({
//     from : " neha",
//     to:"priyas",
//     msg :" send me your exam sheets",
//     created_at: new Date(),
//   })

// chat.insertMany([ 
//     {
//     from : " neha",
//     to:"priyas",
//     msg :" send me your exam sheets",
//     created_at: new Date(),
// },
// {
//     from : " neha",
//     to:"priyas",
//     msg :" send me your exam sheets",
//     created_at: new Date(),
// }

// ])


//   chat1.save()
//   .then((res)=>{
//     console.log("run is running",res)
//   })
//   .catch((err)=>{
//     console.log("not working",err)
//   })