const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const cors = require("cors");
// this auto parses json received by requests into objects
app.use(express.json());

// this helps connect this api with the react frontend without giving errors
app.use(cors());

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

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("Server running");
});