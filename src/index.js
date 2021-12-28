const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const { routes: userRoutes } = require("./user/routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);

module.exports = app;
