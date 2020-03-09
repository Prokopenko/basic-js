const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw 'Not implemented';
  // remove line with error and write your code here

  if(typeof sampleActivity != 'string') //validate parameters
    return false;
  
  var A0 = parseFloat(sampleActivity); //sampleactivity is a string

  if(A0 > MODERN_ACTIVITY || A0 <= 0 || isNaN(A0)) //validate parameters and check inadequate values
    return false;

  var k = 0.693/HALF_LIFE_PERIOD; //const of activity
  var t = 0;

  t = Math.log(MODERN_ACTIVITY/A0)/k; //the age

  return Math.ceil(t); //float to int with round


};
