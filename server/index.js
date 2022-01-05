require("dotenv").config;
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.use(express.static(path.join(__dirname, "..", "client", "build")));
  app.get("*", (_, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
app.listen(port, () => {
  console.log("Server is up!");
});
