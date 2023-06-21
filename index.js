/*
██       ██████   █████  ██████      ███    ███ ███████ ████████ ██   ██  ██████  ██████  ███████ 
██      ██    ██ ██   ██ ██   ██     ████  ████ ██         ██    ██   ██ ██    ██ ██   ██ ██      
██      ██    ██ ███████ ██   ██     ██ ████ ██ █████      ██    ███████ ██    ██ ██   ██ ███████ 
██      ██    ██ ██   ██ ██   ██     ██  ██  ██ ██         ██    ██   ██ ██    ██ ██   ██      ██ 
███████  ██████  ██   ██ ██████      ██      ██ ███████    ██    ██   ██  ██████  ██████  ███████  
from the src/methods directory                                                                                             
*/                                                                                          
const method1 = require('./src/methods/methods');
const waves = require('./src/methods/waves');
// ... add more methods as needed




/*
██       ██████   █████  ██████      ████████ ██   ██ ███████     ██    ██ ████████ ██ ██      ███████     
██      ██    ██ ██   ██ ██   ██        ██    ██   ██ ██          ██    ██    ██    ██ ██      ██          
██      ██    ██ ███████ ██   ██        ██    ███████ █████       ██    ██    ██    ██ ██      ███████     
██      ██    ██ ██   ██ ██   ██        ██    ██   ██ ██          ██    ██    ██    ██ ██           ██     
███████  ██████  ██   ██ ██████         ██    ██   ██ ███████      ██████     ██    ██ ███████ ███████                                                                                                                                                                                                                  
Load the utils from the src/utils directory. */
const lastUsed = require('./src/utils/lastUsed');
// ... add more utils as needed

/*
____ _  _ ___  ____ ____ ___
|___  \/  |__] |  | |__/  |   
|___ _/\_ |    |__| |  \  |  
*/  
// Export the methods and utils
module.exports = {
  method: {
    method1,
    waves,
    // ... export more methods as needed
  },
  utils: {
    lastUsed,
    // ... export more utils as needed
  }
};
