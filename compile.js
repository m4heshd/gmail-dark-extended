// Modules
const sass = require('sass');
const path = require('node:path');
const fs = require('node:fs');

// Files
const inputFile = path.join('src', 'gmail.scss');
const outputFile = path.join('dist', 'gmail.user.css');

// Compilation
const compiledScss = sass.compile(inputFile);

// Output
try {
    fs.writeFileSync(outputFile, compiledScss.css);
    console.log('Output written to "dist" directory.');
} catch (error) {
    console.error(`Failed to compile SCSS: \n ${error}`);
}