const express = require('express')
const app = express();
const mongoose = require("mongoose")

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});

app.listen(process.env.PORT,  ()=> {
    console.log("Server running on" , process.env.PORT);
});