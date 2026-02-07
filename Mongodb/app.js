const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('hey');
});

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "shreya",
        email: "shreya@gmail.com",
        username: "shreya"
    });

    res.send(createduser);
});



app.get('/Update', async (req, res) => {
 let updateduser = await  userModel.findOneAndUpdate({username:"shreya"},{name:"shreya sharma"},{new : true})

    res.send(updateduser);
});

app.get('/read', async (req, res) => {
 let users = await  userModel.find();

    res.send(users);
});

app.get('/delete', async (req, res) => {
 let users = await  userModel.findOneAndDelete({username:"shreya"});
    res.send(users);
});




app.listen(3000, () => {
    console.log("Server started on port 3000");
});
