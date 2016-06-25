/*
We are going to create a very simple game.
Things you will have to Google:
1.  Generating a random number(hint: Math.random())
2.  Running a timer (hint: setInterval, clearInterval, etc)
3.  Compare a start time and current time by seconds (hint: new Date)
The rules of the game are as follows:
Someone ate Rush's chicken pot pie!  We know it was someone in class, but we don't know who.  Luckily, Tim knows, but he's going to make you guess.
Goals of the game:
*/
//console.log(guessNode.value)
var currentScoreText = document.querySelector('.currentScore');
var currentTimeText = document.querySelector('.currentTime')
var wrongAnswerText = document.querySelector('.wrongAnswer')
var submitGuess = document.querySelector('.submit')
    //submitGuess.addEventListener('click', testGuess)*
submitGuess.addEventListener('click', guessInput)

var guessNode = document.querySelector('.guess')


var errors = document.querySelector('.errors')

var previousGuess = document.querySelector('.previousGuess')

// 1.  Use the following array to represent all students:
var Person = function(id, firstname, lastname) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getInitials = function() {
    return this.firstname.substring(0, 1) + this.lastname.substring(0, 1);
}
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
var Game = function() {
    this.students = [
        new Person(1, "Markham", "Gross"),
        new Person(2, "Ari", "Zamudio"),
        new Person(3, "Liam", "Hurt"),
        new Person(4, "Mike", "McDermott"),
        new Person(5, "Dylan", "Eckert"),
        new Person(6, "Aaron", "Martin"),
        new Person(7, "Markus", "Brun"),
        new Person(8, "Blaze", "Halderman"),
        new Person(9, "Jayson", "Smith"),
        new Person(10, "Svyatoslav", "Safonov"),
    ];
};
// 2.  Start the game:
Game.prototype.Start = function() {
    this.isPlaying = true;
    this.currentScore = 10;
    currentTimeText.innerHTML = 0;
    currentScoreText.innerHTML = 10;
    previousGuess.innerHTML = '';
    errors.innerHTML = '';
    console.log('The game is now starting, you have 20 seconds to guess the pie thief');
    this.rightAnswer = Math.floor(Math.random() * 10) + 1;
    console.log(this.rightAnswer)
    this.previousGuesses = [];
    this.gameClock = 0;
    this.gameRef = setInterval(gameTimer, 1000);
    this.gameStart = new Date();

}

var gameTimer = function() {
    checkTime()
}

var checkTime = function() {
        var checkDate = new Date()
        game.gameClock = Math.floor((checkDate - game.gameStart) / 1000)
        currentTimeText.innerHTML = game.gameClock;
        if (game.gameClock >= 20 || game.currentTime === 0) {
            clearInterval(game.gameRef)
            game.isPlaying = false;
            game.gameClock = 0;
            wrongAnswer('YOU LOSE! Time ran out! Remember you only have 20 seconds to guess')
        }
    }
    // 3.  Display a prompt:  "Guess who ate the pie?  Enter initials only."
    /*var showPrompt = function() {
      if (game.isPlaying == true){
        var guess = prompt('Guess who ate the pie? Enter initials only.')
        if (guess === '') {
            showPrompt()
        } else if (guess) {
            checkGuess(guess.toUpperCase());
        }
      }
    };*/

function guessInput() {
    if (game.isPlaying === true) {
        if (guessNode.value.length > 0) {
            checkGuess(guessNode.value.toLowerCase());
        }
    }
}

function testGuess() {
    console.log(guessNode)
}


function checkGuess() {
    guessNode.value = ''
    checkTime()
    currentScoreText.innerHTML = game.currentScore;
    if (game.previousGuesses.indexOf(guessNode.value) !== -1) {
        wrongAnswer('You already guessed that!');
        return;
    }
    for (var i = 0; i < game.students.length; i++) {
        if (guessNode.value === game.students[i].getInitials()) {
            console.log(game.students[i]);
            game.currentScore--
                if (game.students[i].id === game.rightAnswer) {
                    wrongAnswer('You win with a score of ' + game.currentScore + ' in ' + game.gameClock + ' seconds!')
                    game.gameClock = 0;
                    currentTimeText.innerHTML = game.gameClock;
                    currentScoreText.innerHTML = 0;
                    game.isPlaying = false;
                    clearInterval(game.gameRef)
                    return;
                } else {
                    game.previousGuesses.push(guessNode.value)
                    previousGuess.innerHTML = game.students[i].firstname + ' ' + game.students[i].lastname + ' did not take the pie'
                    return;
                }
        }
    }
    wrongAnswer('No matching student found.')
}

var wrongAnswer = function(errorMessage) {
    game.currentScore--
        currentScoreText.innerHTML = game.currentScore;
    errors.innerHTML = (errorMessage)
}

// 4.  If "gameClock" hits 20 seconds:
//  4.1 Display an alert: "Sorry, you lost without finding pie.  Please try again."
//  4.2 Restart the game by resetting to step 2

// 5.  Allow the game to be restarted at any time by typing "restart()" in the console.
var game = new Game();
