const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();
app.use(cors());
app.use(express.json());
app.use('', routes);

module.exports = app;