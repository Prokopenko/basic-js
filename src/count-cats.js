module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  var f = 0;
  for(var i = 0; i < matrix.length; i++)
  {
    for(var k = 0; k < matrix[i].length; k++)
    {
      if(matrix[i][k] === "^^")
        f++;
    }
  }

  return f;

};
