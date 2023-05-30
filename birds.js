const express = require('express')
const router = express.Router();


router.use(function timelog(req,res,next){
    console.log('time:',Date.now());
    next()
})

router.get('/about',(req, res, next)=> {
    res.send('<h1>todo sobre nosotros , pajaritos</h1>')
    next();
});

router.get("/", (req, res, next) => {
    res.send('<h1>pagina oficial pajaritos</h1>');
    next();
});

router.all("/secret", (req, res, next) => {
    res.send('<h1>el secreto de los pajaritos</h1>');
    next();
});


router.get("*", (req, res, next) => {
  res.send("<h1>no existe la pagina solicitada</h1>");
  next();
});


module.exports= router;