#!/usr/bin/env node --harmony

/**
 * making the functions public so that they can be tested
 * still having reference to them here
 */

var program = require('commander');
var SearchEngine = require('./searchEngine.js');

var searchEngine = new SearchEngine();

program
    .version('0.0.1')
    .description('Random vinyl recommending system');

program
    .command('genre <genre>')
    .description('Search with the genre provided and get random vinyl within the genre.')
    .action(searchEngine.genreSearch);

program
    .command('random')
    .description('Get a random vinyl.')
    .action(searchEngine.randomSearch);

// Process the arguments
program.parse(process.argv);

