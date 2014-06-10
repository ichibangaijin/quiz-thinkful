var fishGame = {
  questions: ["What type of fish is this?", "What size is a keeper?", "What is a popular bait for this fish?", "When is the best time to fish?"],
  answers: [["Black Bass", "Spotted Bass", "Small Mouth Bass", "Striped Bass"], ["10in", "11in", "12in", "18in"], ["grass", "seaweed", "adult sturgeon", "shad"], ["nighttime", "daytime", "high tide", "changing tides"]],
  correctAnswer: ["Striped Bass", "18in", "shad", "changing tides"],
  response: {
    positive: "You are correct!",
    negative: "Sorry, guess again!"
  }
};

var q = 0;
var score = 0;

function question(q) {
  var questions = fishGame.questions[q];
  var answer = fishGame.correctAnswer[q];
  var guess;
  $(".whatAmI p").show().text(questions);
  for (var qAnswer = 0; qAnswer < fishGame.answers[q].length; qAnswer++) {
    $("ul").append("<li class='selector'><input type='checkbox'>" + fishGame.answers[q][qAnswer] + "</input></li>");
    $(".selector").click(function () {
      score +=1;
      if (q === 3) {
        var gameover = score; 
        $("#scorebox p").text(gameover + " tries to answer 4 questions");
        gameOver();  
      } else {
        guess = $(this).text();
        if (guess == answer) {
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
      }
    });
  }
}


function gameOver(){
  $("li").remove(); 
  $(".whatAmI p").text("Thanks for Playing!");
}



function nextQuestion(z) {
  console.log(z);
  question(z);
}

$(document).ready(function () {
  $("a.letsPlay").click(function () {
    $(this).hide();
    $(".container").show();
    $("#scorebox p").text("click on below answer");
    q = 0;
    question(q);
  });


});