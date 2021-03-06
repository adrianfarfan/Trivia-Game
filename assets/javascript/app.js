$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();



$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	
	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	
	
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>"
	 + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: "
	  + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000); 
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>"
	 + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: "
	  + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000); 
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>"
	 + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "
	 + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong'";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>"
	 + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. "
	  + answerArray[questionCounter][0] + "</p><p class='answer'>B. "
	  +answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+
	  "</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>"
	 + "<p class='text-center'>All done, here's your score!" + "</p>" + "<p class='summary-correct'>Correct Answers: "
	  + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally +
	   "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = [
			"BB-8 is an astromech droid from what film?", 
			"Who does the voice over Dory from Finding Nemo and Finding Dory?", 
			"In the Wizard of Oz, what did the scarecrow want from the wizard?", 
			"What fictional planet is the hero Superman from?", 
			"What famous actor is known for saying I'll be back?", 
			"What was the name of the monkey in the Disney movie Aladdin?", 
			"Who is the wizard in The Lord of the Rings?", 
			"Who was the first female monster to appear in a movie?"
		];
var answerArray = [
			["Star Wars", "Star Trek", "Interstellar", "Battlestar Gallactica"], 
			["Sarah Silverman", "Ellen Degeneres", "Cameron Diaz", "Drew Barrymore"], 
			["To be human", "Freedom", "A Brain", "Money"], 
			["Abydos","Pandora","Krypton","Clement"], 
			["Sylvester Stallone", "Chuch Norris", "Steven Seagal", "Arnold Schwarzenegger"], 
			["Abu", "Wukong", "Beppo", "Boots"], 
			["Ganon", "Gandalf", "Alatar", "Bloise"], 
			["She-Wolf","Mrs. Dracula","Carrie","The Bride of Frankenstein"]
		];
var imageArray = [
			"<img class='center-block img-right'>", 
			"<img class='center-block img-right'>", 
			"<img class='center-block img-right'>", 
			"<img class='center-block img-right'>", 
			"<img class='center-block img-right'>", 
			"<img class='center-block img-right'>", 
			"<img class='center-block img-right'>", 
			"<img class='center-block img-right'>"
		];
var correctAnswers = [
			"A. Star Wars", 
			"B. Ellen Degeneres", 
			"C. A Brain", 
			"C. Krypton", 
			"D. Arnold Schwarzenegger", 
			"A. Abu", 
			"B. Gandalf", 
			"D. The Bride of Frankenstein"
		];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
