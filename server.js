const express = require('express');
const router = express.Router()
const helmet = require('helmet');
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require('cors');
const { readdirSync } = require("fs")
const colors = require("colors");
require("dotenv").config();

const app = express();

//middlewares
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet())
app.use(cors());

//Database
mongoose
    .connect(process.env.DB)
    .then(() => console.log("Database is connected".rainbow.italic))
    .catch((err) => console.log("Database Error : ", err))



//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App started at ${port}`.america.bold);
});