const express = require("express");
const router = require("./routes/");
const morgan = require("morgan");
const cors = require("cors");
//creacion app
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

module.exports = app;
