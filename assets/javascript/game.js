//assigns random number to variable targetnumber
var targetNumber = Math.floor(Math.random() * 101) + 19;
var counter = 0;
var winCount = 0;
var lossCount = 0;

//gives each gem a random # and assigns it by class
var gem1 = Math.floor(Math.random() * 11) + 1;
var gem2 = Math.floor(Math.random() * 11) + 1;
var gem3 = Math.floor(Math.random() * 11) + 1;
var gem4 = Math.floor(Math.random() * 11) + 1;

//displays win in html by id
$("#winCount").html(winCount);
//displays loss in html by id
$("#lossCount").html(lossCount);
//displays number to guess by increments on click's
$("#counter").text(counter);
//displays variable target numner in html with class id
$("#number-to-guess").text(targetNumber);

//Restarts Game, provides new random number, assigns each gem by id a random #
function restartGame() {

  targetNumber = Math.floor(Math.random() * 101) + 19;
  $("#number-to-guess").text(targetNumber);
  gem1 = Math.floor(Math.random() * 11) + 1;
  gem2 = Math.floor(Math.random() * 11) + 1;
  gem3 = Math.floor(Math.random() * 11) + 1;
  gem4 = Math.floor(Math.random() * 11) + 1;
  counter = 0;
  $("#counter").text(counter);

}

function win() {

  alert("You win!");
  winCount ++;
  $("#win").text(winCount);
  restartGame();
}

function lose() {

  alert("You lose!");
  lossCount ++;
  $("#lossCount").text(lossCount);
  restartGame();
}


//gem one on click generates random number
$('#gem1').on('click', function () {
  counter = counter + gem1;

  $('#counter').text(counter);

  if (counter == targetNumber) {
    win();
  }
  else if (counter > targetNumber) {
    lose();
  }
});

// gem two on click generates random number guess
$('#gem2').on('click', function () {
  counter = counter + gem2;

  $('#counter').text(counter);

  if (counter == targetNumber) {
    win();
  }
  else if (counter > targetNumber) {
    lose();
  }
});

// gem three on click generates random number guess
$('#gem3').on ('click', function(){
  counter = counter + gem3;
  
  $('#counter').text(counter); 
        
      if (counter == targetNumber){
        win();
      }
      else if (counter > targetNumber){
        lose();
      }   
});  


// gem four on click generates random number guess
$('#gem4').on ('click', function(){
  counter = counter + gem4;
  
  $('#counter').text(counter); 
       
      if (counter == targetNumber){
        win();
      }
      else if (counter > targetNumber){
        lose();
      }   
});  

