const jsonServer = require('json-server');
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;
const app = express(server);
const path = require("path");

app.use(middlewares);
app.use(router);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
  }

app.listen(port);