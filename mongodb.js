const MongoClient = require('mongodb')
const DB_URI = `mongodb://localhost:27017/neumaticos`;
MongoClient.Connect(DB_URI,(err,db)=>{
    if (err) {
        throw err;}
    db.collection('neumaticos').find().toArray((err,res)=>{
        if (err) {
            throw err
        }res.end(db)
    })
});

module.exports= MongoClient