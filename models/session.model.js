const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    session: {
        id: String,
        cart: Object
    }
})

const Session = mongoose.model('Session', SessionSchema, 'sessions');

module.exports = Session;