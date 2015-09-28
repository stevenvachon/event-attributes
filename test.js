"use strict";
var eventAttributes = require("./");

var expect = require("chai").expect;



it("html should work", function()
{
	expect( eventAttributes.html["onclick"] ).to.be.true;
});



it("svg should work", function()
{
	expect( eventAttributes.svg["onbegin"] ).to.be.true;
});
