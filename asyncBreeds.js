const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
  if(!error) {
    callback(data);    
  }
  if(error) {
    callback(undefined);
  }
    
  });
  
};

breedDetailsFromFile('Bombay', (name) => {
  console.log(name);
});


module.exports = breedDetailsFromFile;