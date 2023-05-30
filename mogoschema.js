const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const neumaticoSchema= new Schema({
medida: String,
marca: String,
ubicacion: String,
precio: Number,
stock: Number,
estado: String,
id: Number
})


const Neumatico = mongoose.model('Neumatico',neumaticoSchema)


module.exports= Neumatico;