var mongoose = require('mongoose');

var ElderSchema = new mongoose.Schema({
    name: String,
})

var Elder = mongoose.model('Elder', ElderSchema);
