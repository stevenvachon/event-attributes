# event-attributes [![NPM Version][npm-image]][npm-url] [![Bower Version][bower-image]][bower-url] [![Build Status][travis-image]][travis-url]

> Map of HTML and SVG event attributes.

## Installation
Type this at the command line:
```shell
npm install event-attributes --save-dev
```


## Usage
### Server/Browserify
```js
var eventAttributes = require("event-attributes");

if (eventAttributes.html["onclick"] === true) {
	// is an html event attribute
}

if (eventAttributes.svg["onrepeat"] === true) {
	// is an svg event attribute
}
```
### UMD/AMD/etc
Accessible via `define()` or `window.eventAttributes`.


[npm-image]: https://img.shields.io/npm/v/event-attributes.svg
[npm-url]: https://npmjs.org/package/event-attributes
[bower-image]: https://img.shields.io/bower/v/event-attributes.svg
[bower-url]: https://github.com/stevenvachon/event-attributes
[travis-image]: https://img.shields.io/travis/stevenvachon/event-attributes.svg
[travis-url]: https://travis-ci.org/stevenvachon/event-attributes
