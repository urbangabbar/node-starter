// This is how we import packages in JS file
const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const users = [];

// Using express import create an instance of app
const app = express();

var jsonParser = bodyParser.json();

// app provide multiple methods for HTTP verbs we can add URL and a handler.
// first param is the URL we want to accept request on, Next param is a callback function to handle request.
app.get("/api/users", jsonParser, (req, res) => {
  res.send(users);
});

app.delete("/api/users/:userID", jsonParser, (req, res) => {
  const userID = Number(req.params.userID);
  const userToBeRemoved = users.findIndex(user => user.id === userID);
  if(userToBeRemoved === -1){
    return res.sendStatus(400);
  }
  users.splice(userToBeRemoved, 1);
  res.sendStatus(200);
});

app.get("/api/users/:userID", jsonParser, (req, res) => {
  const userID = Number(req.params.userID);
  const userToBeSent = users.findIndex(user => user.id === userID);
  if(userToBeSent === -1){
    return res.sendStatus(400);
  }
  res.send(users[userToBeSent]);
});

app.post("/api/users", jsonParser, (req, res) => {
  users.push({ ...req.body, id: Math.floor(Math.random() * 1000000000) });
  res.sendStatus(200);
});

// Listen help you start listening to a particular port.
// PORT is a channel available on machience
// 8081;3000;8080;4000;
// ipAdress:8081 / 8080 -> Domain (Proxy) http:google
app.listen(port, () => {
  console.log(`User app is listening on port ${port}`);
});
