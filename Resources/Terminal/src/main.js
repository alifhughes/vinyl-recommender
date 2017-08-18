#!/usr/bin/env node

// Init xhr
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var open = require("open");

// Create discogs client
var Discogs = require('disconnect').Client;
var db = new Discogs().database();

// Set the limit for the id
var releaseIdLimit = 11000000;

// Get arguments array
var args = process.argv.slice(2);

// Call the argument engine
argumentEngine();

/**
 * The argument engine, decides how to act depeding on arguments
 */
function argumentEngine () {

    // Check if any arguments at all
    if (!args.length) {
        // No arguments, get a random release or artist

        //open('https://www.google.co.uk/');

        // Rand number for id
        var randID = generateRandomID(releaseIdLimit);

        /**
         * if not found, do it again with diff rand num
         * repeat until found
         */

        // Get release with rand id
        db.getRelease(100000000000, function(err, data){
            console.log(err);
            console.log(data);
        });

        return;
    }

    // Switch on the first argument flag
    switch (args[0]) {

        case '-h' :
            // Show help
            help();
            break;

        case '-g' :
            break;

        case '-a' :
            break;

        default :
            // Fall through

            console.log(
                    'No correct parameter entered,' +
                    ' try entering \'-h\' command to see the help.'
                );

    }

};

/**
 * Logs out the help that contains options and how to use program
 */
function help () {
    console.log('HELP!');
};

/**
 * Get a random id within the limit passed in
 * @param {int} idLimit  The limit that the ID can go up to
 * @returns {int}        The random id
 */
function generateRandomID (idLimit) {
    return Math.floor(Math.random() * idLimit);
};

function prettifyJson () {
};
