/// <reference path="defs/js-mod.d.ts" />
// There are 3 ways to import JS modules
// 1. Importing "global" JS modules
// To import a "global" (i.e. node_modules for node and browserify) module,
// point typescript to a definition file that declares  what the identifier
// "js-mod" will export. To see how to write such a file,
// open "defs/js-mod.d.ts"
// Note: reference declarations are only parsed at the top of the file.
var jsmod1 = require('js-mod');

// 2. Importing "./relative" JS modules with .d.ts
// To import it using a relative path, write a .d.ts file at the same directory
// with that module, then use the import statement like this:
var jsmod2 = require('./relative/js-mod');

var jsmod3 = require('./relative/js-mod');

// Exporting a function is easy.
function lol(a) {
    return jsmod1(a) * 2;
}


module.exports = lol;

