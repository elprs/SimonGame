var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

// 1. Start the game


//1. Add the pressed class to the button that gets clicked and flash.

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColour).removeClass("pressed");
    }, 80);
  }

  
//1. Play the sound for the button colour selected.
function playSound(name) {
  var audio = new Audio("SimonSounds/" + name + ".mp3");
  audio.play();
}

//1. Detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function () {
  //2. Inside the handler, create a new variable called userChosenColour to store the id
  var userChosenColour = $(this).attr("id");
  //3. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  // Test
  // console.log(userClickedPattern);

  //4.  Play the sound for the button colour selected.
  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Select the button with the same id as the randomChosenColour.
  //2. Animate a flash to the button selected .
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //3.  Play the sound for the button colour selected.
  playSound(randomChosenColour);
}

