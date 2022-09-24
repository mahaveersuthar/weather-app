    const express =  require('express');
const path = require("path")
const hbs = require('hbs')
const app = express();
const port= process.env.PORT || 8000;

// public static path
const staticpath = path.join(__dirname,"../public");

app.use(express.static(staticpath));
app.set('view engine','hbs');
app.set("views",path.join(__dirname,'../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partial'));
app.get("/",(req, res)=>{
    res.render('index');
})

app.get("/about",(req, res)=>{
    res.render("about");
})

app.get("/weather",(req, res)=>{
    res.render("weather");
})
app.get("*",(req, res)=>{
    // res.render("404 ERROR page");
})

app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`);
})