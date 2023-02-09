"use strict";
// Create a variable with typescript
let id = 5;
id = 7;
// How to Compile TypesCript to JS using TSCompiler
//      Open the terminal and type: ----- tsc 'name-TSC-file' ----
//      Once it's compiled it will create a JS file, by default is going to compile to ES5.
//      Watch mode: ---- tsc --watch 'name'----- any changes we make to .ts file will watch it and update when se save.
//      Compile any(all) typescript files in the project, open terminal and type: tsc
// Set up configuration file
//      Open terminal and type: tsc --init
//      Creates a new tsconfig.json file.
//      Vanilla Typescript setup
//      You can modify the compiler options, a few basic ones like target set to 'ESNEXT'
//      "target": "ESNEXT",
//      "module": "ESNEXT"
// Set up directory structure
//      In the tsconfig.json file use the src folder for .ts files and dist for .js compiled.
//      Set up this uncommenting and filling
//      "outDir": "./dist"
//      "rootDir": "./src"
