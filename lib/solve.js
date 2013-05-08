/* global module */
'use strict';

/**
 * A project that solve a math problem posted on the internet.
 *
 * @class math-problem
 */

/**
 * A function that solves the problem posted on facebook and other places
 *
 * @method solve
 * @static
 * @param input {string|number} The problem to solve
 * @return {number} the answer to the problem
 */
function solve (input) {
    /* cast to string */
    input = input.toString();

    /* solve the problem! */
    return ((input.match(/[0469]/g) || []).length) + (((input.match(/[8]/g)) || []).length * 2);
}

module.exports = solve;