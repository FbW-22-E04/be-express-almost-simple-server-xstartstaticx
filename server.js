import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 4002;

app.listen(port, () => {
  console.log("The server is up and running at port", port);
});

const greetings = (req, res) => {
  res.send("Top o' the mornin' to ya!!");
};

const sendTime = (req, res) => {
  const date = new Date();
  res.send(date.toISOString());
};

const getRandom = (req, res) => {
  let randomNumber = Math.ceil(Math.random() * 10000000).toString();
  res.send(randomNumber);
};

const checkNumber = (req, res) => {
  console.log("value is", req.params);

  if (Number.isNaN(parseInt(req.params.value))) {
    res.send("Cannot be converted to a number");
  } else {
    res.send("Can be converted to a number");
  }
};

app.get("/hello", greetings);
app.get("/time", sendTime);
app.get("/random", getRandom);
app.get("/isnumber/:value", checkNumber);
