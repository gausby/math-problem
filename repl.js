/* global require */
var repl = require('repl')
,   solve = require('./lib/solve')
;

var local = repl.start('> ');
local.context.solve = solve;
