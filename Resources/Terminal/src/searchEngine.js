var co = require('co');
var getRandomInt = require('./util/randomIntGenerator.js');
var prompt = require('co-prompt');

// Init xhr
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var open = require("open");

// Create discogs client
var Discogs = require('disconnect').Client;

var vinylrec = function () {

    // create instance of dicogs database
    this.db = new Discogs().database();

    // Set the limit for the id
    this.releaseIdMaxLimit = 11000000;
    this.releaseIdMinLimit = 0;

    return this;
};

/**
 * Search with the genre provided
 *
 * @param {string} genre  The genre to search with
 */
vinylrec.prototype.genreSearch = function (genre) {
    console.log('genre "%s"', genre);
};

/**
 * Retrieve a random vinyl
 */
vinylrec.prototype.randomSearch = function () {
    console.log('Random');

/*
    // Get release with rand id
    db.getRelease(100000000000, function(err, data){
        console.log(err);
        console.log(data);
    });
*/
};

/**
 * Format the raw JSON returned from API call
 *
 * @param {string} JSON  The returned JSON
 */
vinylrec.prototype.grettifyJson = function (JSON) {
};

module.exports = vinylrec;
