/*global assert require*/
"use strict";

var buster = require('buster')
,   solve = require('../lib/solve')
;

var refute = buster.assertions.refute;
var assert = buster.assertions.assert;

buster.testCase("When given", {
    setUp: function() {}
    ,"8809 it should return 6": function() {
        assert.equals(solve(8809), 6);
    }
    ,"7111 it should return 0": function() {
        assert.equals(solve(7111), 0);
    }
    ,"2172 it should return 0": function() {
        assert.equals(solve(2172), 0);
    }
    ,"6666 it should return 4": function() {
        assert.equals(solve(6666), 4);
    }
    ,"1111 it should return 0": function() {
        assert.equals(solve(1111), 0);
    }
    ,"3213 it should return 0": function() {
        assert.equals(solve(3213), 0);
    }
    ,"7662 it should return 2": function() {
        assert.equals(solve(7662), 2);
    }
    ,"9313 it should return 1": function() {
        assert.equals(solve(9313), 1);
    }
    ,"0000 it should return 4": function() {
        assert.equals(solve("0000"), 4);
    }
    ,"2222 it should return 0": function() {
        assert.equals(solve(2222), 0);
    }
    ,"3333 it should return 0": function() {
        assert.equals(solve(3333), 0);
    }
    ,"5555 it should return 0": function() {
        assert.equals(solve(5555), 0);
    }
    ,"8193 it should return 3": function() {
        assert.equals(solve(8193), 3);
    }
    ,"8096 it should return 5": function() {
        assert.equals(solve(8096), 5);
    }
    ,"1012 it should return 1": function() {
        assert.equals(solve(1012), 1);
    }
    ,"7777 it should return 0": function() {
        assert.equals(solve(7777), 0);
    }
    ,"9999 it should return 4": function() {
        assert.equals(solve(9999), 4);
    }
    ,"7756 it should return 1": function() {
        assert.equals(solve(7756), 1);
    }
    ,"6855 it should return 3": function() {
        assert.equals(solve(6855), 3);
    }
    ,"9881 it should return 5": function() {
        assert.equals(solve(9881), 5);
    }
    ,"5531 it should return 0": function() {
        assert.equals(solve(5531), 0);
    }

});