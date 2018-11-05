const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/example');

mongoose.connection.once('open', function() {
    console.log('Connection has been made');
}).on('error', function(error) {
    console.log('Connection error:', error);
});