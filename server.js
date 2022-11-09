// This is how we import packages in JS file
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/users");
const validateObjectId = require("./object-id-validator")

const port = 3000;
const databsePromise = mongoose.connect(
  "mongodb+srv://abhinav:abcd1234@cluster0.rjdagq2.mongodb.net/todo?retryWrites=true&w=majority"
);


// Using express import create an instance of app
const app = express();

// used to serve static file
// index.html is default home page
// to respond to requests for static files
app.use(express.static("ui"));

var jsonParser = bodyParser.json();

// app provide multiple methods for HTTP verbs we can add URL and a handler.
// first param is the URL we want to accept request on, Next param is a callback function to handle request.
app.get("/api/users", jsonParser,async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

app.delete("/api/users/:userID", jsonParser, (req, res) => {
  //User.deleteOne({_id: ""})
  const userID = Number(req.params.userID);
  const userToBeRemoved = users.findIndex((user) => user.id === userID);
  if (userToBeRemoved === -1) {
    return res.sendStatus(400);
  }
  users.splice(userToBeRemoved, 1);
  res.sendStatus(200);
});

// would update user -> for example by postman update username
// app.put

app.get("/api/users/:userID", jsonParser,async (req, res) => {
  const userID = req.params.userID;
  if(!validateObjectId(userID)){
    res.status(400).send("Please send valid object id");
  }
  const user = await User.findById(userID);

  if (!user) {
    return res.status(400).send("user not found");
  }
  res.send(user);
});

app.post("/api/users", jsonParser,async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save()
  res.send(newUser);
});


// Listen help you start listening to a particular port.
// PORT is a channel available on machience
// 8081;3000;8080;4000;
// ipAdress:8081 / 8080 -> Domain (Proxy) http:google
databsePromise
  .then(() =>
    app.listen(port, () => {
      console.log(`User app is listening on port ${port}`);
    })
  )
  .catch((err) => console.log("failed to connect db", err));
