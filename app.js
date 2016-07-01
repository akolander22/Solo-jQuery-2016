$(function(){
  var totalRed = 0;
  var totalYellow = 0;
  var totalGreen = 0;
  var totalBlue = 0;

  $('.color-button').on('click', function(event){
    var tempColor = $(event.target).data('color');
    // console.log(tempColor);

    switch(tempColor){
      case "red":
        $('.container').append('<div class="color-cube red"></div');
        totalRed += 1;
        $('#red').text('Total red: ' + totalRed);
      break;
      case "yellow":
        $('.container').append('<div class="color-cube yellow"></div>');
        totalYellow += 1;
        $('#yellow').text('Total yellow: ' + totalYellow);
      break;
      case "green":
        $('.container').append('<div class="color-cube green"></div>');
        totalGreen += 1;
        $('#green').text('Total green: ' + totalGreen);
      break;
      case "blue":
        $('.container').append('<div class="color-cube blue"></div>');
        totalBlue += 1;
        $('#blue').text('Total red: ' + totalBlue);
      break;
    }

  });
  // $('.reset').on('click', function(event){
  //   $('.container').empty();
  //
  //   // $('#red').text('Total red: ' + totalRed);
  //   // $('#yellow').text('Total yellow: ' + totalYellow);
  //   // $('#green').text('Total green: ' + totalGreen);
  //   // $('#blue').text('Total red: ' + totalBlue);
  // })

})
