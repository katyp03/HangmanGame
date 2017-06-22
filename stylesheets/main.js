let guessbutton;
document.addEventListener("DOMContentLoaded", function(){
	// define key value pairs for different secret words and hints:
	var words = [{secretWord: "Porpoise", hint: "Animal"}, {secretWord: "Pineapple", hint: "Fruit"}, {secretWord: "Barcelona", hint: "Place"}, {secretWord: "Marigold", hint: "Color"}]
	// to get a random word on page load:
	var word = words[Math.floor(Math.random()*(words.length-1))];
		console.log(word);
	guessbutton = document.querySelector("#buttonGuess");
	space1 = document.querySelector("#space1");
	space2 = document.querySelector("#space2");
	space3 = document.querySelector("#space3");
	space4 = document.querySelector("#space4");
	space5 = document.querySelector("#space5");
	space6 = document.querySelector("#space6");
	space7 = document.querySelector("#space7");
	space8 = document.querySelector("#space8");
	space9 = document.querySelector("#space9");
	space10 = document.querySelector("#space10");
	space11 = document.querySelector("#space11");
	space12 = document.querySelector("#space12");
	var guessCounter = 6;
	var failBar = document.getElementById('failBar');
	var failText = document.getElementById('failText');
	secretWordLength = word.secretWord.length;
	guessForm = document.querySelector("#formGuess");
	hintText = document.querySelector("#texthint");
	guessesLeft = document.getElementById('guessesLeft');
	console.log(secretWordLength);
	// display hint on click:
	hintText.addEventListener("click", function(){
		console.log("Clicking on hint is working");
		hintText.innerText = word["hint"];
		// show question mark placeholders or white spaces to indicate length of word:
		document.querySelectorAll('.qmark').forEach( (el,i) => {
			if( i >= secretWordLength ) {
				el.innerText='';
				el.classList.remove('splash2');
				el.classList.add('white');
		}
	});
	});
	guessbutton.addEventListener("click", function(){
		guessesLeft.innerText = guessCounter;
		// define letterGuess as the letter the user guesses, and make sure it's one character in length:
		letterGuess = guessForm.querySelector("input[type=text]").value;
		if( letterGuess.length === 0 ) {
			alert ("A blank space?  Really?  Let's try this again.");
		} else if( letterGuess.length > 1 ) {
			alert ("COME ON NOW.  One letter at a time.");
		} 
		// if letterGuess is correct length and is in secretWord:
		else if( letterGuess.length === 1 && word.secretWord.toLowerCase().includes(letterGuess) ){
			console.log(letterGuess);
			// get all index positions of letterGuess in secretWord;
			function charPos(secretWord, letterGuess) {
  				return secretWord.toLowerCase()
         		.split("").map(function (letter, i) { if (letter == letterGuess) return i;})
         		.filter(function (v) { return v >= 0; });
			}
			// create indices variable to represent the index position of the correct letter the user guesses:
			var indices = charPos(word.secretWord, letterGuess);
			console.log(indices);
			// make the correct letter guesses display in corresponding boxes:
				if ( indices.includes(0) ){
					space1.innerText = letterGuess;
				}
				if ( indices.includes(1) ){
					space2.innerText = letterGuess;
				}
				if ( indices.includes(2) ){
					space3.innerText = letterGuess;
				}
				if ( indices.includes(3) ){
					space4.innerText = letterGuess;
				}
				if ( indices.includes(4) ){
					space5.innerText = letterGuess;
				}
				if ( indices.includes(5) ){
					space6.innerText = letterGuess;
				}
				if ( indices.includes(6) ){
					space7.innerText = letterGuess;
				}
				if ( indices.includes(7) ){
					space8.innerText = letterGuess;
				}
				if ( indices.includes(8) ){
					space9.innerText = letterGuess;
				}
				if ( indices.includes(9) ){
					space10.innerText = letterGuess;
				}
				if ( indices.includes(10) ){
					space11.innerText = letterGuess;
				}
				if ( indices.includes(11) ){
					space12.innerText = letterGuess;
				}
		}
		else {
			// if letterGuess length is correct but the letter doesn't match a letter in the array, decrease the number of remaining guesses by 1 and display in guessCounter:
			console.log(guessCounter);
			guessCounter -= 1;
			guessesLeft.innerText = guessCounter;
			// update text on failBar to display number of remaining guesses:
			failText.innerText = guessCounter + " more wrong guesses allowed...";
			// change failBar text if there's only 1 guess left:
			if (guessCounter === 1){
				failText.innerText = "Only 1 more chance!";
			}
			// make the length of failBar decrease by 1/6th with each wrong guess:
			failBar.className = ("col-xs-" + (guessCounter*2));
			// make an alert when the user has used all wrong guesses:
			if (guessCounter == 0){
				alert("YOU'RE SO STUPID.");
				// make page reload after the user loses a game:
				document.location.reload();
			}
		}
		// make the input (letterGuess) blank again after every guess:
		document.querySelector("input[name=letter]").value = '';
	});
});