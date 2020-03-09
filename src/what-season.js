module.exports = function getSeason(date) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if(date == null)
    return 'Unable to determine the time of year!';

  //original date-type doesn't have property 'toString'. Check for it

  if(typeof date.getMonth() == 'number' && !date.hasOwnProperty('toString'))
  {
    switch(date.getMonth())
    {
      case 11: name = "winter";break;
      case 0: name = "winter";break;
      case 1: name = "winter";break;
      case 2: name = "spring";break;
      case 3: name = "spring";break;
      case 4: name = "spring";break;
      case 5: name = "summer";break;
      case 6: name = "summer";break;
      case 7: name = "summer";break;
      case 8: name = "autumn";break;
      case 9: name = "autumn";break;
      case 10: name = "autumn";break;
    }
    return name;
  }
  else throw "message";
  

};

