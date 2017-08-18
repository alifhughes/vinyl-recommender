var main = require('../../Resources/Terminal/src/main.js');
var test = require('tape');

test('Passing example test', function (t) {

    var textExpected = 'Test string';
    var textActual   = 'Test string';

    t.equal(textActual, textExpected);

    t.end();

});
