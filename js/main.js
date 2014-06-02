
var firstQuestion = {
    answerOne : ["Black Bass", "Large Mouth Bass", "Perch", "Small Mouth", "Striped Bass"]
       
};




$(document).ready(function(){
  $("a").click(function(){
    $("a, h3.letsPlay").hide();
    $(".container").fadeToggle(500); 
  });
  for (var i = 0 ; i < firstQuestion.answerOne.length ; i++) 
  $(".questionOne ul").append("<li>" + firstQuestion.answerOne[i] + "</li>"); 
  
});

