// Define a global variable 'Module' with a method 'onRuntimeInitialized':
Module = {
    onRuntimeInitialized() {
      // this is our application:
      console.log(cv.getBuildInformation());
    }
  }
  // Load 'opencv.js' assigning the value to the global variable 'cv'
  var cv = require('./libs/openCV/js/openCV_v4_0_1.js');