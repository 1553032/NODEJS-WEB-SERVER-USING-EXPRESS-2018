const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    avatar: String,
    phone: String
});

const User = mongoose.model('User', UserSchema, 'students');

module.exports = User;