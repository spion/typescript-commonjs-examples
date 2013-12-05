// Its easy to import a TypeScript module from typescript,
// like this:

import lol = require('./ts-mod');
console.log(lol(1))

// The ts-mod module is a single function. To see
// how that is accomplished, open the ts-mod.ts file

// To compile this CommonJS module, you can use:
// tsc --outDir build main.ts --module commonjs

// This should generate only separate CommonJS modules
// which you can use with tools such as browserify or 
// directly within node.

