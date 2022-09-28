const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

let messages = ["hi", "hello"];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  const msg = req.body.message;
  messages.push(msg);
  res.send(msg);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
