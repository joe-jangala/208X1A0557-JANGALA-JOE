const mongoose = require('mongoose');
mongoose.connect("your_mongodb_key_here")

const crudSchema = mongoose.Schema({
    name:String,
    age:Number,
})

const crud = mongoose.model('crud',crudSchema)

module.exports = {
    crud
}