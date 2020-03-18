const express = require("express");
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");


const app = express();

db.authenticate()
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => console.log(err));

app.set("view engine", "handlebars");
app.engine("handlebars", exhbs());


app.use(express.static(path.join(__dirname,"public")));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.use("/", require("./routes/Ruta"));
app.use("/forma", require("./routes/Ruta"));


const PORT = process.env.PORT || 4000;

app.listen(PORT , console.log(`Server started on port : ${PORT}`));

