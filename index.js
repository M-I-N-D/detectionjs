// libraries
const express = require("express");
const app = express();
const routes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(routes);
app.use(express.static('public'));
app.listen(process.env.PORT || 3000 , () => {
    console.log("Server is up and running");
  });