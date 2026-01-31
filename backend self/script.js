// const fs = require("fs");

// fs.writeFile("hey.txt", "Hello, World!", (err) => {
//     if (err) {
//         console.error("Error:", err);
//     } else {
//         console.log("File created & data written successfully");
//     }
// });

// fs.rename("hey.txt","hello.txt",function(err){
//  if (err) console.log(err);
//  else console.log("done");
// })


// fs.copyFile("hello.txt", "./copy/chacha.txt", function(err) {
//     if (err) console.error(err);
//     else console.log("done");
// })

// fs.unlink("hello.txt",function(err){
//     if(err) console.log(removed);
// })

// fs.rmdir()



// const http = require('http');
// const server = http.createServer(function(req,res){
// res.end("hello world");
// })
// server.listen(5000);

// const express = require('express');
// const app = express();
// app.use(function(req , res, next){
// console.log('middleware chala');
// next();
// });
// // app.get(route, requestHandler)
// app.get("/", function(req,res){
// res.send("champion");
// })
// app.listen(2000);



// const express = require('express');
// const app = express();

// app.use(express.json());                              ///form handling
// app.use(express.urlencoded({extended: true}));

// app.get("/",function(req,res){
// res.send("champion mera anuj");
// });

// app.get("/about",function(req,res){
// res.send("about page hai ye");
// });

// app.get("/profile", function(req,res,next){
// return next (new Error("Something went wrong"))
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });
// app.listen(4000);