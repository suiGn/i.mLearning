# mLearning
Machine Learning Tools.

Install through neurons.me package.

mLearning is a proces to call invoked machine learning methods.
It stands by itself and can be attach to other process through the corresponding protocol.

# index.js:

File for your mLearning module that loads the methods from the src/methods directory:

```js
// Load the methods from the src/methods directory
const method1 = require('./src/methods/method1');
const method2 = require('./src/methods/method2');
// ... add more methods as needed

// Export the methods
module.exports = {
  method1,
  method2,
  // ... export more methods as needed
};
```

Make sure to adjust the paths and filenames according to your actual project structure. This code assumes that your methods are located in the src/methods directory and that you have separate files for each method (e.g., method1.js, method2.js).

Remember to include the required logic inside each method file to perform the desired mLearning functionality.