// models.js
const mongoose = require('mongoose');

// Define a schema
const JobSchema = new mongoose.Schema({
    name: String,
    url: String
});

// Create a model
const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
