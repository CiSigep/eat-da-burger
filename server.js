var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 7001;

var app = express();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController");

app.use(routes);

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})