// Load the necessary modules
const fs = require('fs');
const path = require('path');

// Define the method
function method1() {
  console.log('Starting mLearning methods...');
  
  // Read the methods directory and count the number of files
  const methodsDir = path.join(__dirname, '../methods');
  const files = fs.readdirSync(methodsDir);
  const numMethods = files.length;

  console.log(`Number of methods: ${numMethods}`);
}

// Export the method
module.exports = method1;