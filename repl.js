/* global require */
var repl = require('repl')
,   problem = require('./lib/problem')
;

var local = repl.start('> ');
local.context.problem = problem;
