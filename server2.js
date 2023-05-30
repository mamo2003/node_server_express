
const express= require('express')
//const birds= require('./birds.js');
const app= express()
const path= require('path')
const PORT=3000

const user= {
    nombre: 'mamo',
    apellido: 'larrañaga',
    admin: true,
}

//app.use('/birds',birds)

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')))

app.get("/", (req, res) => {
    res.render("pages/index",{user});
});
app.get("/neumaticos", (req, res) => {
    res.render("pages/neumaticos", { user });
});
app.get("/nosotros", (req, res) => {
  res.render("pages/nosotros", { user });
});

//manejo de errores
app.get('*',(req,res,next)=>{
res.status(404).render("pages/err");
//res.status(500).send(`<h1>error servidor</h1>`)
next();
})



 //escucha en el puerto
app.listen(PORT,() =>{ console.log(`oyendo en puerto ${PORT}`);}); 