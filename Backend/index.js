// const { consoleLogger } = require("./start/logging");
const express = require("express");
const cors =require("cors")
require("express-async-errors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors())
// const path = require("path");
require("./start/database")();
require("./start/routes")(app);

app.get("/",(req,res)=>{
  res.send("Noman Hassan")
})

// app.use(express.static(path.join(__dirname, "public")));

const port = 5000;
app.listen(port, () => {
console.log("Server is running on:",port);

});
