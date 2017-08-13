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

db.getRelease(9815160, function(err, data){
    console.log(data);
});

// Call the argument engine
argumentEngine();

/**
 * The argument engine, decides how to act depeding on arguments
 */
function argumentEngine () {

    // Check if any arguments at all
    if (!args.length) {
        // No arguments, get a random release or artist
        open('https://www.google.co.uk/');
        // Rand 0 or 1
        // Rand number for id
        //      if call is 404
        //      get diff rand num
        //      continue

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

function prettifyJson () {
};
