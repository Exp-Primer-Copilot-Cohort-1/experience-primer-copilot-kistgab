// Create web server
// 1. npm init -y
// 2. npm install express
// 3. npm install body-parser
// 4. npm install cors
// 5. node comments.js
// 6. http://localhost:3000/comments
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
const comments = [
  { username: "Tam", content: "Hello" },
  { username: "Tom", content: "Hi" },
];

app.use(bodyParser.json());
app.use(cors());

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send("Add comment successfully");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
