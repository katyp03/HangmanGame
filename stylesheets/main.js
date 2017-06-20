// create object prototype for new word/round; contain hint text, array of letters from word, space assignments for letters

// in #row4- take text from input box, create/use checkLetter function to check if input letter equals (===) any letter from letter array of that correct guess word; if so, display that letter in assigned space; if not, fill guessbar another 1/6 and decrease guessesLeft by 1


// Cam's help:
// var secretWord = "Word"; //= this.words[this.currentWord] ??

// var userGuess = 'any letter'; //= letterGuess = guessForm.querySelector("input[type=text]").value

// secretWord.toLowerCase().split('').reduce( function(arr,letter,index) {
//   if( letter == userGuess ) {
//     arr.push(index);
//   }
//   return arr;
// }, []);


// // trying to use objects:
// function Word(secretWord,hint,indexAssign) {
// 	this.secretWord = secretWord;
// 	this.hint = hint;
// 	this.indexAssign = ; //??
// }

// // creating Round constructor:
// function Round(){
// 	//the following arrays are parallel; 
// 	this.words = []; //our word object
// 	this.currentWord = 0; 
// }

// // to add a word:
// Round.prototype.addWord = function(){
// 	word = this.words[this.currentWord];
//   	if( word instanceof Word ) {
//     	this.words.push( word );
//     	// document.getElementById('').innerHTML = ;
//     	return true;
//   	} else {
//     	return false;
//   	};
// 	console.log(arguments);
// }

// // define this Round and add my words:
// var myRound = new Round;
// myRound.addWord(new Word('porpoise', 'Animal'),new Word('tiger', 'Animal'));



let guessbutton;
document.addEventListener("DOMContentLoaded", function(){
	var words = [{secretWord: "Dog", hint: "Animal"}, {secretWord: "Pineapple", hint: "Fruit"}, {secretWord: "Barcelona", hint: "Place"}, {secretWord: "Marigold", hint: "Color"}]
	// to get a random word on page load:
	var word = words[Math.floor(Math.random()*(words.length-1))];
		console.log(word);

		// ALTERNATE METHOD:
	// randomly choose one of the words
	// word = words[1]
	// word[secretWord]
	// word[hint]
	// var secretWord = "Word";
	// var hint = "Animal";

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
	guessForm = document.querySelector("#formGuess");
	hintText = document.querySelector("#texthint");
	hintText.addEventListener("click", function(){
		console.log("Clicking on hint is working");
		// ALTERNATE METHOD:
		// hintText.innerText = words[0]["hint"];

		hintText.innerText = word["hint"];
	});
	guessbutton.addEventListener("click", function(){
		letterGuess = guessForm.querySelector("input[type=text]").value;
		if( letterGuess.length === 0 ) {
			alert ("A blank space?  Really?  Let's try this again.");
		} else if( letterGuess.length > 1 ) {
			alert ("COME ON NOW.  One letter at a time.");
		} 
		else if( letterGuess.length === 1 && word.secretWord.includes(letterGuess) ){
			console.log(letterGuess);
			var letterIndex = word.secretWord.indexOf(letterGuess);
			console.log(letterIndex);

			// get index of letterGuess in secretWord;
			function charPos(secretWord, letterGuess) {
  				return secretWord.toLowerCase()
         		.split("").map(function (letter, i) { if (letter == letterGuess) return i;})
         		.filter(function (v) { return v >= 0; });
			}
			var indices = charPos(word.secretWord, letterGuess);
			console.log(indices);

			// have secretWord display:none in #row4, so that letter at index[0] is in #space1, letter index[1] is in #space2, and so on; if there's a hidden letter in a space (so if space contains display:none), have some kind of indicator (maybe a space without display:none can have .white class)

			// SUCCESS CONDITION
			// check if letter in word
			// if true display in appropriate box
			// save letter somewhere? (in an array?)- necessary?
		}
		else {
			console.log("letterGuess doesn't match");
			// correct letterGuess length (1 character) but the letter doesn't match a letter in the array
			// use contain and/or test, indexOf
		// 	// decrease guessesLeft by 1, fill guess bar another 1/6th and have consolation phrase (eg, "Sorry, try again") display on fadeIn and fadeOut
		// }
		}
	});
});

// counter for 