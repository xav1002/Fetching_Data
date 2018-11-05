const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleFileSchema = new Schema({
    name: String,
    number: Number
});

const exampleFile = mongoose.model('examplefile', exampleFileSchema);

module.exports = exampleFile;