// create object prototype for new word/round; contain hint text, array of letters from word, space assignments for letters

// in #row4- take text from input box, create/use checkLetter function to check if input letter equals (===) any letter from letter array of that correct guess word; if so, display that letter in assigned space; if not, fill guessbar another 1/6


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
// function Word(arr,hint,indexAssign) {
// 	this.arr = [];
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
// myRound.addWord(new Word('[p, o, r, p, o, i, s, e]', 'Animal'),new Word('[t, i, g, e, r]', 'Animal'));



let guessbutton;
document.addEventListener("DOMContentLoaded", function(){
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
		// need to create hint variable
		// hintText.innerText = `"${hint}"`;
	});
	guessbutton.addEventListener("click", function(){
		// secretWord = this.words[this.currentWord]; //???
		letterGuess = guessForm.querySelector("input[type=text]").value;
		if( letterGuess.length === 0 ) {
			alert ("A blank space?  Really?  Let's try this again.");
		} else if( letterGuess.length > 1 ) {
			alert ("COME ON NOW.  One letter at a time.");
		} // else if( letterGuess.length > 1 && letterGuess.length !=0 && letterGuess != [some value in letter array] ) {
		// 	// fill guess bar another 1/6th and have consolation phrase (eg, "Sorry, try again") display on fadeIn and fadeOut
		// }
		else {
			// space#{$#}.innerHTML = "{$letter}";
			// secretWord.toLowerCase().split('').reduce( function(arr,letter,index) {
				console.log(letterGuess);
  	// 			if( letter == letterGuess ) {
   //  			arr.push(index);
  	// 			}
  	// 			return arr;
			// }, []);
		}; 
	});
});

