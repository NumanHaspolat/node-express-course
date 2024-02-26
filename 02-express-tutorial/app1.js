// const express = require("express");
// const app = express();

// //* app.get
// //* app.post
// //* app.put
// //* app.delete
// //* app.all
// //* app.use
// //* app.listen

// const port = 5000;

// app.get("/", (req, res) => {
//   res.status(200).send("Home Page(express)");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About Page(express)");
// });

// app.all("*", (req, res) => {
//   res.status(404).send(" <h1>Resource not found</h1> ");
// });

// app.listen(port, () => {
//   console.log(`Server is listeningon port ${port}...`);
// });

//?

const express = require("express");
const path = require("path");
const app = express();

//* Setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
  //* adding to static assets
  //* SSR
});

app.get("*", (req, res) => {
  res.status(404).send("Not found error");
});

app.listen(5000, () => {
  console.log("Server is listeneng on port 5000");
});
