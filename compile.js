// Modules
const sass = require('sass');
const path = require('node:path');
const fs = require('node:fs');
const project = require('./package.json');

// Files
const inputFile = path.join('src', 'gmail.scss');
const outputFile = path.join('dist', 'gmail.user.css');

// Compilation
const compiledCSS = sass
    .compile(inputFile)
    .css
    .replace('$VAR_VERSION$', project.version);

// Output
try {
    fs.writeFileSync(outputFile, compiledCSS);
    console.log('Output written to "dist" directory.');
} catch (error) {
    console.error(`Failed to compile SCSS: \n ${error}`);
}