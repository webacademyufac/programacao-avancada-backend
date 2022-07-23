const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rodrigo:7xvyLnuRRd2xbDLi@cluster0.cffkth6.mongodb.net/?retryWrites=true&w=majority', {
    sslValidate: false
})
mongoose.Promise = global.Promise;

module.exports = mongoose;