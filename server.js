const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
dotenv.config();

const front = app.use(
    express.static(path.join(__dirname, process.env.WEBSITE_FOLDER))
);
console.log(path.join(__dirname, process.env.WEBSITE_FOLDER));
//trae lel proyecto front
app.get("/", function (req, res) {
    res.send(front);
});

//trae una pagina sobre nosotros
app.get("/about", (req, res, next) => {
    res.send(`<h1>todo sobre nosotros</h1>`);
});

//trae una panigna secreta para todos los metodos http
app.all("/secret", (req, res, next) => {
    res.send(`<h1>pagina secreta</h1>`);
    next();
});

//escucha en el puerto
app.listen(process.env.PORT, process.env.HOST, function () {
    console.log(
    `servidor escuchando en http:${process.env.HOST}:${process.env.PORT}`
    );
});
/* app.listen(PORT,() =>{ console.log(`oyendo en puerto ${PORT}`);}); */


