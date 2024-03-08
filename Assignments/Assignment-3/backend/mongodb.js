const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://joejangala12:Ramunava@cluster0.ekrnn9q.mongodb.net/crud")

const crudSchema = mongoose.Schema({
    name:String,
    age:Number,
})

const crud = mongoose.model('crud',crudSchema)

module.exports = {
    crud
}