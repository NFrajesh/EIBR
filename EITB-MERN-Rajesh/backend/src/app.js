const express = require("express");
const cors = require("cors");
const ottRoutes = require("./routes/ottRoutes");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", ottRoutes);

module.exports = app;
