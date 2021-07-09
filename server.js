const express = require("express");
const path = require("path");

// initialise express app
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false })); // replaces body-parser

// routes
app.get("/", (req, res) => {
  res.send(path.join(__dirname, "./", "client", "dist", "index.html"));
});
app.get("/conduct", (req, res) => {
  res.send(path.join(__dirname, "./", "client", "dist", "conduct.html"));
});

// set static folder
app.use(express.static(path.join(__dirname, "./", "client", "dist")));

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

//test
