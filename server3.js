const mongoose= require('mongoose') 

const uri = `mongodb://mamo:1234@localhost:27017/neumaticos/?authMechanism=PLAIN&authSource=%24external`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>console.log('conectado a mongo'))
.catch(err=>console.log('error de conexion',err))