const express = require("express");
const colors = require("colors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", require("./routes/studentRoutes"));

app.listen(PORT, () => {
  console.log(`Server Starts on port:${PORT}`.yellow.underline);
});
