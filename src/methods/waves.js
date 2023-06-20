
let wave = {
  _name: 'wave',
  _frequency: 0,
  _range: '',
  _vector: '',

  get frequency() {
    return this._frequency;
  },

  set frequency(value) {
    this._frequency = value;
  },

  get range() {
    return this._range;
  },

  set range(value) {
    this._range = value;
  },

  incrementFrequency() {
    this._frequency++;
  },

  decrementFrequency() {
    this._frequency--;
  }
};

module.exports = wave;

/* Now, you can access the wave object 
and its properties and methods using mlearning.methods.wave. 

For example, you can set the frequency using 
mlearning.methods.wave.frequency = 10,

 get the range using :
 mlearning.methods.wave.range, 

 increment the frequency using :
 mlearning.methods.wave.incrementFrequency(), 
 and so on. */