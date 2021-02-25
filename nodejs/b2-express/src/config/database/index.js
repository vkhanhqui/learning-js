const mongoose = require('mongoose')

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/learning_express', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connected')
    } catch (error) {
        console.log('could not connect')
    }

}

module.exports = { connect }