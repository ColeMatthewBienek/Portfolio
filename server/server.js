const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(express.static("client/dist"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.err("Failed to start server");
  } else {
    console.log(`Server started on port ${process.env.SERVER_PORT}.`);
  }
});
