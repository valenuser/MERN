const mongoose = require('mongoose')
const URI = 'mongodb://localhost/mern-tasks'

mongoose.connect(URI)
    .then(db => console.log('La base de datos se conecto'))
    .catch(err => console.log(err))

module.exports = mongoose