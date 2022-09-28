import express from "express";
import exphbs from "express-handlebars";

const app = express();

const hbs = exphbs.create(
    {
        defaultLayout: 'main',
        extname: 'hbs'
    }
);
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", "views");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/video", (req, res) => {
    res.render("video");
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server is working, bitch");
})
