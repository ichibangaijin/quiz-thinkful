var fishGame = {
  questions: ["What type of fish is this?", "What size is a keeper?", "What is a popular bait for this fish?", "When is the best time to fish?", "game over! Sorry I haven't finished yet."],
  answers: [["Black Bass", "Spotted Bass", "Small Mouth Bass", "Striped Bass"], ["10in", "11in", "12in", "18in"], ["grass", "seaweed", "adult sturgeon", "shad"], ["nighttime", "daytime", "high tide", "changing tides"]],
  correctAnswer: ["Striped Bass", "18in", "shad", "changing tides"],
  response: {
    positive: "You are correct!",
    negative: "Sorry, guess again!"
  }
};

var q;


function question(q) {
  var questions = fishGame.questions[q];
  var answer = fishGame.correctAnswer[q];
  var guess;
  $(".whatAmI").show().text(questions);
  for (var qAnswer = 0; qAnswer < fishGame.answers[q].length; qAnswer++) {
    $("ul").append("<li class='selector'><input type='checkbox'>" + fishGame.answers[q][qAnswer] + "</input></li>");
  }

  console.log(answer);
  $(".selector").click(function () {
    guess = $(this).text();
    if (guess == answer) {
      alert(fishGame.response.positive);
      $("li").remove();
      $(".whatAmI").hide();
      q += 1;
      nextQuestion(q);
    } else {
      alert(fishGame.response.negative);
      $("ul li").remove();
      question(q);
    }
  });
}


function nextQuestion(z) {
  console.log(z);
  question(z);
}

$(document).ready(function () {
  $("a.letsPlay").click(function () {
    $(this).hide();
    $(".container").show();
    q = 0;
    question(q);
  });


});