const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 8000;
const hbs = require("hbs");


// public static path
const staticPath = path.join(__dirname , "../public");
const templets_path = path.join(__dirname , "../templet/views");
const partials_path = path.join(__dirname , "../templet/partials");




app.set("view engine" , "hbs");
app.set("views" ,templets_path)
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));





// routing
app.get ("/" , (req , res) => {
    res.render("index")
});
app.get ("/about" , (req , res) => {
    res.render("about")
});
app.get ("/weather" , (req , res) => {
    res.render("weather")
});
app.get ("*" , (req , res) => {
    res.render("404error" , {
        errorMsg : "Page Not Found"
    })
});


app.listen(port , () => {
    console.log("app listening the port at" + port);
})