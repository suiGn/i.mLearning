// DATA STRUCTURES - that can hold all data relationships
// and can be used to train a model
// and can be used to predict a value 
// and can be used to predict a value with a confidence
// and can be used to predict a value with a confidence and a margin of error
// and can be used to predict a value with a confidence and a margin of error and a model trained on data set d 
// and a learning rate of l 
//and a loss function of f and a regularization function of r and a regularization rate of rr
// and a number of epochs of e and a batch size of b.
class Model {
    constructor() {
      this.dataSet = null;
      this.learningRate = null;
      this.lossFunction = null;
      this.regularizationFunction = null;
      this.regularizationRate = null;
      this.numEpochs = null;
      this.batchSize = null;
    }
  setDataSet(dataSet) {
      this.dataSet = dataSet;
    }
  setLearningRate(learningRate) {
      this.learningRate = learningRate;
    }
  setLossFunction(lossFunction) {
      this.lossFunction = lossFunction;
    }
  setRegularizationFunction(regularizationFunction) {
      this.regularizationFunction = regularizationFunction
            }
  setRegularizationRate(regularizationRate) {
        this.regularizationRate = regularizationRate;
        }
  setNumEpochs(numEpochs) {
    this.numEpochs = numEpochs;
  }
  setBatchSize(batchSize) {
    this.batchSize = batchSize;
  }
  trainModel() {
    // logic to train the model using the provided data and parameters
  }
  predictValue() {
    // logic to predict a value using the trained model
  }
  predictValueWithConfidence() {
    // logic to predict a value with confidence using the trained model
  }
  predictValueWithConfidenceAndMarginOfError() {
    // logic to predict a value with confidence and margin of error using the trained model
  }
}
// create an instance of the Model class
const model = new Model();
// set the values for the model
model.setDataSet(dataSet);
model.setLearningRate(learningRate);
model.setLossFunction(lossFunction);
model.setRegularizationFunction(regularizationFunction);
model.setRegularizationRate(regularizationRate);
model.setNumEpochs(numEpochs);
model.setBatchSize(batchSize);
// train the model
model.train  
// Create an instance of the Module class
const module = new Module();
// Set the values for the module
module.setModuleName("Computer Science");
module.setModuleCode("CS101");
// Get the class for the module
const moduleClass = module.getModuleName();
console.log(moduleClass); // Output: "Computer Science"