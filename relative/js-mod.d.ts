// Module definitions for files that
// are imported using relative paths 
// are a bit different. We imagine that
// we are already inside a 
// declare module "xx" { ... }
// statement, then declare all the module's
// exported things. 

// To declare an exported subobject as
// a property called "subobject", use:
// export var subobject:type;

// To declare an exported function, use:
// export function name(..argspec..): returntype;

// Alternatively we can declare various types then
// use:
// export = declaredType

// Here we use that techinque to export the entire 
// module as a function:

declare function test(a:number):number;
export = test;

