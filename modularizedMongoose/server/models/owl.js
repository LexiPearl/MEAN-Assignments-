var mongoose = require('mongoose');

var OwlSchema = new mongoose.Schema({
    name: String,
    color: String
})

var Owl = mongoose.model('Owl', OwlSchema);
