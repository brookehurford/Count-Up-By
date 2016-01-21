var countUpBy = function(countTo, countBy) {
  var finalResult = [];

  for (var i = 0; i <= countTo; i += countBy) {
    if (i !== 0) {
    finalResult.push(i);
    }
  }
  return finalResult
}

$(document).ready(function(){
  $("form#countUpBy").submit(function(event) {
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    var numberString = countUpBy(countTo, countBy);

    $(".numberString").text(numberString);
    $(".result").show();
    event.preventDefault();
  });
});
