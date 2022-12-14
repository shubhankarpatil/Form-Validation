const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.use(express.static("files"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(req, res){
  console.log("The server has started on port 3000");
});
