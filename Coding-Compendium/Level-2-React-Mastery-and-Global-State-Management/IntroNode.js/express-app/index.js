const express = require("express");
const path = require("path");

const app = express();

const PORT = 8888;

app.use(express.static(path.join(__dirname, "about")));

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/get-info", (req, res) => {
  console.log("request getinfo");
  res.status(200).send({
    name: "Phil",
    age: 36,
    skills: "cooking",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
