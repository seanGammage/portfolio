const mongoose = require('mongoose'); // load mongoose into the project

const ProjectSchema = mongoose.Schema({
    title: String

}, {
    timestamps: true // auto create createdAt and updatedAt fields
});

module.exports = mongoose.model('Project', ProjectSchema);