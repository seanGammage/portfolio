const mongoose = require('mongoose'); // load mongoose into the project

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    projects: []

}, {
    timestamps: true // auto create createdAt and updatedAt fields
});

module.exports = mongoose.model('User', UserSchema);