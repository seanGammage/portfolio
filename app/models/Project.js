const mongoose = require('mongoose'); // load mongoose into the project

const ProjectSchema = mongoose.Schema({
    title: String,
    subTitle: String,
    types: [], //Java, javascript, React...
    clicks: Number, // Number of times a project has been clicked

}, {
    timestamps: true // auto create createdAt and updatedAt fields
});

module.exports = mongoose.model('Project', ProjectSchema);