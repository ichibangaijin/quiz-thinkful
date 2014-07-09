var fishGame = {
  images: ["'img/striper.gif'", "'img/striper.gif'", "'img/striper.gif'", "'img/striper.gif'" , "'img/striper.gif'"],
  questions: ["What type of fish is this?", "What size is a keeper?", "What is a popular bait for this fish?", 
    "When is the best time to fish?"],
  answers: [["Black Bass", "Striped Bass", "Spotted Bass", "Small Mouth Bass", ], 
    ["10in", "11in", "12in", "18in"], ["shad", "grass", "seaweed", "adult sturgeon"], 
      ["nighttime", "daytime", "high tide", "changing tides"]],
  correctAnswer: ["Striped Bass", "18in", "shad", "changing tides"],
  response: {
    positive: "You are correct!",
    negative: "Sorry, guess again!"
  }
};

var q = 0;
var score = 0;

function question(q) {
  score += 1;
  var questions = fishGame.questions[q];
  var answer = fishGame.correctAnswer[q];
  var guess;
  var images = fishGame.images[q];
  $(".fishImage").html("<img src=" + images + "alt='photo'/>");
  $(".whatAmI p").show().text(questions);
  
     if (q == 4) {
      $("#scorebox p").text(score + " tries to answer " + fishGame.questions.length +" questions");
      gameOver(); 
      }
  for (var qAnswer = 0; qAnswer < fishGame.answers[q].length; qAnswer++) {
    $("ul").append("<li class='selector'><input type='checkbox'>" + fishGame.answers[q][qAnswer] + "</input></li>");
  }
  $(".selector").click(function () {
      guess = $(this).text();
      if (guess === answer) {
        $("#scorebox p").text(fishGame.response.positive);
        $("li").remove();
        $(".whatAmI p").hide();
        q += 1;
        nextQuestion(q);
      } else {
        $("#scorebox p").text(fishGame.response.negative);
        $("ul li").remove();
        question(q);
      }
    });
  }





function gameOver(){
  $("li").remove(); 
  $(".whatAmI p").text("Thanks for Playing!");
    console.log(answer);
}



function nextQuestion(z) {
  console.log(z);
  question(z);
}

$(document).ready(function () {
  $("a.letsPlay").click(function () {
    $(this).hide();
    $(".container").show();
    $("#scorebox p").text("click on your guess below");
    q = 0;
    question(q);
  });


});