const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    lon: String,
    lat: String,
    count: Number
});

const Data = mongoose.model('devices', DataSchema);

module.exports = Data;