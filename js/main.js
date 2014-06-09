var fishGame = {
    questions: ["What type of fish is this?"],
    answers: ["Black Bass", "Spotted Bass", "Small Mouth Bass", "Striped Bass"],
    correctAnswer: "Striped Bass",
    response : {
                positive : "You are correct!",
                negative : "Sorry, guess again!"
    }
};

var q = 0;


function question(q) {
    var questions = fishGame.questions[q];
    var answer = fishGame.correctAnswer;
  var guess; 
    $(".container").show();
    $(".whatAmI").text(questions);
    for (var qAnswer = 0; qAnswer < fishGame.answers.length; qAnswer++) {
        $("ul").append("<li class='selector'>" + fishGame.answers[qAnswer] + "</li>");
         }

  console.log(answer);
        $(".selector").click(function () {
            guess = $(this).text();
          if (guess == answer) {
            alert(fishGame.response.positive);
              q += 1;
              return nextQuestion();
              } else {
              alert(fishGame.response.negative);
                question(q);
            }
      });
    }
       



        function nextQuestion(q) {
            question(q);
        }

        $(document).ready(function () {
            $("a.letsPlay").click(function () {
                $(this).hide();
                question(q);
            });


        });