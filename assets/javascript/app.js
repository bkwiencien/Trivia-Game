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
	passibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Joey Bishop",
	possibeAnswer3: "Jack Paar",
	correctAnswer: "Jack Paar"
}
var q3 = {
	question: "Daddy im Kare Room for Daddy was played by?",
	passibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Frank Sinatra",
	possibeAnswer3: "Danny Thomas",
	correctAnswer: "Danny Thomas"
}
function initialize() {
	console.log("initialize");
	createQuestions();
	var timeLeft = 121;
	console.log("time left = " + timeLeft);
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

}
