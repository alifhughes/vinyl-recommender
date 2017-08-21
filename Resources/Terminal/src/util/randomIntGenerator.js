/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 *
 * @param {int} min The upper limit that the ID can go up to
 * @param {int} max The lower limit that the ID can go up to
 * @returns {int}        The random id
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = getRandomInt;
