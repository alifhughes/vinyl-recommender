var randomIntGenerator = require('../../Resources/Terminal/src/util/randomIntGenerator.js');
var test = require('tape');

test('Random id generator produces number between limits', function (assert) {

    // Init the limits
    var idUpperLimt = 11000000;
    var idLowerLimit = 0;

    // Call the random id generator with limit
    var randomID = randomIntGenerator(idLowerLimit, idUpperLimt);

    // Assert number generated is between limits
    assert.true(randomID >= idLowerLimit);
    assert.true(randomID <= idUpperLimt);

    assert.end();
});
