const express = require("express");
const app = express();

//* app.get
//* app.post
//* app.put
//* app.delete
//* app.all
//* app.use
//* app.listen

const port = 5000;

app.get("/", (req, res) => {
  res.status(200).send("Home Page(express)");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page(express)");
});

app.all("*", (req, res) => {
  res.status(404).send(" <h1>Resource not found</h1> ");
});

app.listen(port, () => {
  console.log(`Server is listeningon port ${port}...`);
});

//TODO 5:03
