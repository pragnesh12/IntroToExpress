const express = require("express");
const app = express();
const port = 1156;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/instaram", (req, res) => {
  res.send("_prragnsh_");
});
app.get("/login", (req, res) => {
  res.send("<center><h1>Please Login</h1></center>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
