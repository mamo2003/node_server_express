const mongoose= require('mongoose') 

const uri = `mongodb://localhost:27017/neumaticos`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>console.log('conectado a mongo'))
.catch(err=>console.log('error de conexion',err))