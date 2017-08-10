var numberCorrect = 0;
var numberWrong = 0;
var numbWins = 0;
var numbLoses = 0;
var q1 = {
	question: "Who hosted queen for a day?",
	possibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Jack Bailey",
	possibleAnswer3: "ED McMahon",
	correctAnswer: "Jack Bailey"
}
var q2 = {
	question: "Who was the first host of the tonight show?",
	possibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Joey Bishop",
	possibleAnswer3: "Jack Paar",
	correctAnswer: "Jack Paar"
}
var q3 = {
	question: "Daddy in Make Room for Daddy was played by?",
	possibleAnswer1: "Ralph Waldo Emerson",
	possibleAnswer2: "Frank Sinatra",
	possibleAnswer3: "Danny Thomas",
	correctAnswer: "Danny Thomas"
}
var q4 = {
	  question: "Who palyed the beaver in Leave it to Beaver",
	  possibleAnswer1: "Jerry Mathers",
	  possibleAnswer2: "Tommy Kirk",
	  possibleAnswer3: "Bobby Driscoll",
	  correctAnswer:   "Jerry Mathers"
}	  


theQuestions = [q1,q2,q3,q4];
function initialize() {
	console.log("initialize");
	createQuestions();
	var timeLeft = 121;
	var gameTimer = setInterval(function() {
		timeLeft--;
		$("#timer").html("<center>Seconds Remaining: " + timeLeft + "</center>")
		if (timeLeft <= 0){
			clearInterval(gameTimer);
	
			$("#timer").html("seconds Remaining: 0");
		}
	},1000);

}
function createQuestions() {
   var idTemplate = "radio";
   var questionText = "";
   var w;
   var nameOfRadio = "radio";
   for (j=0;j<4;j++) {
   	 w = theQuestions[j];
   $("#questions").append("<section>" + w.question);
      for (i=0;i<3;i++){
      	nameOfRadio = "radio" +j;
      if (i==0){
   	    questionText = w.possibleAnswer1;
   	    console.log(questionText + " i= " +i);
      }
      if (i==1){
   	    questionText = w.possibleAnswer2;
   	    console.log(questionText + " i = " +i);
      }
      if (i==2){
   	    questionText = w.possibleAnswer3;
   	    console.log(questionText + " i= " +i);
      }
      $("#questions").append(questionText+ " ");
      var radioYes = document.createElement("input");
      radioYes.setAttribute("type","radio");
      radioYes.setAttribute("id","radio"+i);
      console.log("nameOfRadio " + nameOfRadio);
      radioYes.setAttribute("name",nameOfRadio);
      $("#questions").append(radioYes);
   }
   $("#questions").append("</section>");  
}

 //  $("#questions").append(radioYes);

}
