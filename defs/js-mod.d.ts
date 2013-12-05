// Declaring external (i.e. node_modules with node and browserify)
// modules is done a bit differently. We declare the module name
// as a string, and then within it we define that module's exports.

// For more information on how to define exports, see the
// other .d.ts file in relative/js-mod.d.ts

declare module "js-mod" {
    function test(a: number): number;
    export = test;
}
