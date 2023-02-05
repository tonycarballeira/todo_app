const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://tonycarballeira:Theduke23@cluster0.1of3xbz.mongodb.net/Todo_app?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("Server running");
});