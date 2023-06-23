const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs");
app.set("views",`${__dirname}/src/view`);

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(`${__dirname}/src/resource`));

//Router
const home = require("./src/controller/HomeController");
const article = require("./src/controller/ArticleController");

app.use("/",home);
app.use("/article",article)

app.listen(port,()=>{
    console.log("server start");
})