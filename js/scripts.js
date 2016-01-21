var countUpBy = function(countTo, countBy) {
  var finalResult = [];

  for (var i = 0; i <= (countTo); i += countBy) {
    finalResult.push(i);
  }
  return finalResult
}




// var countUpBy = function(countTo, countBy) {
//   var finalResult = '';
//
//   for (var i = 0; i < countTo; i += countBy) {
//     var result = new Set();
//     result.add(i + ", ");
//     finalResult.concat(result);
//   }
//   return finalResult
// }
