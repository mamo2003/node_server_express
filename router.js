const expres=require('express')
const router= express.Router()

const Neumatico= require('./mogoschema')

router.get('/views/partials/neumaticos', async(req,res)=>{
try {
    const arrayNeumaticos= await Neumatico.find();
    console.log(arrayNeumaticos);
    res.render('neumaticos',{
        arrayNeumaticos
    })
} catch (err) {
    console.log(err);
}

})
module.exports=router;