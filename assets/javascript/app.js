var numberCorrect = 0;
var numberWrong = 0;
var q1 = {
	question: "Who hosted queen for a day?",
	possibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Jack Bailey",
	possibleAnswer3: "ED McMahon",
	correctAnswer: "Jack Bailey",
	correctAnswerByID: "radio10",
	answeredCorrectly: "N"
}
var q2 = {
	question: "Who was the first host of the tonight show?",
	possibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Joey Bishop",
	possibleAnswer3: "Jack Paar",
	correctAnswer: "Jack Paar",
	correctAnswerById: "radio21",
	answeredCorrectly: "N"
}
var q3 = {
	question: "Daddy in Make Room for Daddy was played by?",
	possibleAnswer1: "Ralph Waldo Emerson",
	possibleAnswer2: "Frank Sinatra",
	possibleAnswer3: "Danny Thomas",
	correctAnswer: "Danny Thomas",
	correctAnswerById: "radio22",
	answeredCorrectly: "N"
}
var q4 = {
	  question: "Who played the beaver in Leave it to Beaver?",
	  possibleAnswer1: "Jerry Mathers",
	  possibleAnswer2: "Tommy Kirk",
	  possibleAnswer3: "Bobby Driscoll",
	  correctAnswer:   "Jerry Mathers",
	  correctAnswerById: "radio03",
	  answeredCorrectly: "N"
}	
var q5 = {
	  question: "Who played the Andy's girlfriend on the Andy Grifith Show?",
	  possibleAnswer1: "Aneta Corsaut",
	  possibleAnswer2: "Arnold Schwarzenegger",
	  possibleAnswer3: "Dame Edith Evans",
	  correctAnswer:   "Aneta Corsaut",
	  correctAnswerById: "radio04",
	  answeredCorrectly: "N"
}	    


theQuestions = [q1,q2,q3,q4,q5];
theRadios =[];
function initialize() {
	console.log("initialize");
	createQuestions();
	var timeLeft = 61;
	var gameTimer = setInterval(function() {
		timeLeft--;
		$("#timer").html("<center>Seconds Remaining: " + timeLeft + "</center>")
		if (timeLeft <= 0){
			clearInterval(gameTimer);
			assesTheGame();
	
			$("#timer").html("seconds Remaining: 0 Game Over");
		}
	},1000);

}
function createQuestions() {
   var idTemplate = "radio";
   var questionText = "";
   var w;
   var nameOfRadio = "radio";
   for (j=0;j<5;j++) {
   	 w = theQuestions[j];
   $("#questions").append("<section>" + w.question);
      for (i=0;i<3;i++){
      	nameOfRadio = "radio" +j;
      if (i==0){
   	    questionText = w.possibleAnswer1;
      }
      if (i==1){
   	    questionText = w.possibleAnswer2;
      }
      if (i==2){
   	    questionText = w.possibleAnswer3;
      }
      $("#questions").append(questionText+ " ");
      var radioYes = document.createElement("input");
      radioYes.setAttribute("type","radio");
      radioYes.setAttribute("id","radio"+i+j);
      console.log("id = radio" + i + j);
      radioYes.setAttribute("name",nameOfRadio);
      var len = theRadios.length;
      theRadios[len] = nameOfRadio;
      radioYes.setAttribute("data","radio"+i+j);
      radioYes.setAttribute("value","radio"+i+j);
      radioYes.setAttribute("onclick","xoxo"+i+j+"()");
      $("#questions").append(radioYes);
      $("#questions").append("<br>");
   }
   $("#questions").append("</section>");  
}

}
$("#radio00").on("click" ,function (){
	console.log("1 clicked");
});

function assesTheGame() {
  var whoWasChosen;
  console.log("in assess the game");
  for (j=0;j<theQuestions.length;j++) {
      var w = theQuestions[j];
      if (w.answeredCorrectly == "Y") {
      	numberCorrect++;
      } else {
      	numberWrong++;
      }
   }
   $("#correct").html("correct " + numberCorrect);
   $("#wrong").html("wrong " + numberWrong);
  //whoWasChosen = document.getElementsByName("radio00");
  //console.log(whoWasChosen);

  //console.log(whoWasChosen.input.attributes.checked);

}
function xoxo00() {
	console.log("in xoxo00");
	q1.answeredCorrectly = "N";
	console.log(this);
}
function xoxo10() {
	console.log("in xoxo10");
	q1.answeredCorrectly = "Y";
	console.log(this);
}
function xoxo20() {
	console.log("in xoxo20");
	q1.answeredCorrectly = "N";
	console.log(this);
}
function xoxo01() {
	console.log("in xoxo01");
	console.log(this);
}
function xoxo11() {
	console.log("in xoxo11");
	console.log(this);
}
function xoxo21() {
	console.log("in xoxo21");
	q2.answeredCorrectly="Y";
	console.log(this);
}
function xoxo02() {
	console.log("in xoxo02");
	console.log(this);
}
function xoxo22() {
	console.log("in xoxo22");
	q3.answeredCprrectly="Y";
	console.log(this);
}
function xoxo03() {
	console.log("in xoxo03");
	q4.answeredCorrectly="Y";
	console.log(this);
}
function xoxo13() {
	console.log("in xoxo13");
	console.log(this);
}
function xoxo23() {
	console.log("in xoxo23");
	console.log(this);
}
function xoxo04() {
	console.log("in xoxo04");
	q5.answeredCprrectly="Y";
	console.log(this);
}
function xoxo14() {
	console.log("in xoxo14");
	console.log(this);
}
function xoxo24() {
	console.log("in xoxo24");
	console.log(this);
}







