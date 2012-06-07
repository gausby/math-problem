/* global module */
"use strict";

/**
 * A function that solves the problem posted on facebook and other places
 *
 * @method problem
 * @param input {string|number} The problem to solve
 * @return {number} the answer to the problem
 */
function problem (input) {
    /* cast to string */
    input = input.toString();

    /* solve to problem! */
    return ((input.match(/[069]/g) || []).length) + (((input.match(/[8]/g)) || []).length * 2);
}

module.exports = problem;