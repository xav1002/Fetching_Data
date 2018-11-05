const mocha = require('mocha');
const assert = require('assert');
const exampleFile = require('model')

describe('Saving record', function() {

    it('Saves a record to the database', function(done) {
        var file = new exampleFile({
            name: 'First Example',
            number: 1
        });

        file.save().then(function() {
            assert(!file.isNew);
            done();
        });
        
    });

});