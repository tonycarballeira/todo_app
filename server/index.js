const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

mongoose.connect("mongodb+srv://tonycarballeira:Theduke23@cluster0.1of3xbz.mongodb.net/Todo_app?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result); 
        }
    });
});


app.listen(3001, () => {
    console.log("Server running");
});