const fs = require('fs');
const path = require('path');
const markdownlint = require('markdownlint');

// Define the directory to start searching for files
const dirPath = '/Users/user/markdown-files';

// Set up the options object for markdownlint
const options = {
  files: [], // An array to hold the paths of Markdown files
  config: {
    // Add your markdownlint configuration options here
    default: true
  }
};

// Variables to keep track of how many files and directories were scanned
let numFilesScanned = 0;
let numDirsScanned = 0;

// Recursively find all Markdown files in the specified directory and its subdirectories
function findMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // If the file is a directory, increment the count and recursively search for more Markdown files
      numDirsScanned++;
      findMarkdownFiles(filePath);
    } else if (file.match(/^(post\.)?(en|tr)\.md$/)) {
      // If the file is a Markdown file with the correct file name pattern, add it to the options object and increment the count
      numFilesScanned++;
      options.files.push(filePath);
    }
  });
}

// Call the function to start searching for Markdown files
findMarkdownFiles(dirPath);

// Run markdownlint on the files and get the results
const results = markdownlint.sync(options);

// Check if there are any linting errors
if (results.length > 0) {
  console.error(`Found ${results.length} linting errors in ${numFilesScanned} files across ${numDirsScanned} directories:`);
  results.forEach(result => {
    console.error(`[${result.ruleNames}] ${result.ruleDescription} at line ${result.lineNumber}`);
    console.error(`\t${result.errorDetail}`);
  });
  process.exit(1);
} else {
  console.log(`No linting errors found in ${numFilesScanned} files across ${numDirsScanned} directories`);
}
