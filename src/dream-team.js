module.exports = function createDreamTeam(members) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if(!Array.isArray(members)) //checking of inputs data
    return false;
  
  var result = new Array();

  for(var i = 0; i < members.length; i++)
  {
    if(typeof members[i] === 'string') //check for strings element
    {
      var str_without_whitespaces = members[i].replace(/ +/g, ' ').trim(); //cut whitespaces
      result.push(str_without_whitespaces[0].toUpperCase()); //push first char to result array
    }
  }

  result = result.sort().join('');
  return result;


};