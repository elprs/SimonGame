
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Select the button with the same id as the randomChosenColour.
  //2. Animate a flash to the button selected .
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3.  Play the sound for the button colour selected.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}