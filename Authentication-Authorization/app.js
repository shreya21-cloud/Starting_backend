// const express= require('express');
// const app = express();
// const cookieParser = require('cookie-parser');

// app.use(cookieParser());

// app.get("/",function(req,res){
//     res.cookie("name","shreya");
//     res.send("done");
// })

// app.get("/read",function(req,res){
//     console.log(req.cookies);
//     res.send("read page");
// })


// const express= require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const saltRounds = 10;


// app.get("/",function(req,res){
//     bcrypt.compare("urwedsa", "$2b$10$AXLIxDYPS9JQZTONnIEa1eoDaqlLx9CYF7.HlU2rjCTUVSQSwU.nC").then(function(result) {
//         console.log(result);
// });
// })

const express= require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get("/",function(req,res){
  let token =  jwt.sign({email: "shreya@gmail.com"}, "secret");
  res.cookie("token",token)
  console.log(token);
  res.send("done");
})

app.get("/read",function(req,res){
  let data =  jwt.verify(req.cookies.token,"secret");
  console.log(data);
})
app.listen(3650);