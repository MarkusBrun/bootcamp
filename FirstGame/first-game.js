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

Game.prototype.Start = function() {
    var self = this;
    self.isPlaying = true;
    self.currentScore = 5;
    scoreNode = self.currentScore
    console.log('The game is now starting, you have 20 seconds to guess the pie thief');
    self.rightAnswer = Math.floor(Math.random() * 10) + 1;
    console.log(this.rightAnswer)
    self.previousGuesses = [];
    self.gameClock = 0;

    /*--------------QuerySelectors--------------*/
    var scoreNode = document.querySelector('.scoreNode')
    var currentTime = document.querySelector('.currentTime')
    var guessInput = document.querySelector('.guessInput')
    var submitGuess = document.querySelector('.submit')
    var errorNode = document.querySelector('.errorMessage')
    var previousGuess = document.querySelector('.previousGuess')
    var student1Node = document.querySelector('.student1')
    var student2Node = document.querySelector('.student2')
    var student3Node = document.querySelector('.student3')
    var student4Node = document.querySelector('.student4')
    var student5Node = document.querySelector('.student5')
    var student6Node = document.querySelector('.student6')
    var student7Node = document.querySelector('.student7')
    var student8Node = document.querySelector('.student8')
    var student9Node = document.querySelector('.student9')
    var student10Node = document.querySelector('.student10')
    /*-------------/QuerySelectors--------------*/

var gameTimer = function () {
  i = 20;
  gameInterval = setInterval(function () {
    i--;
    self.gameClock = i
    currentTime.innerHTML = i
      if (i === 0) {
        gameOver()
        wrongInput('GAME OVER')
      }
  }, 1000)
}

submitGuess.addEventListener('click', function (){
  if (self.isPlaying === true) {
      if (guessInput.value.length > 0) {
        console.log('test')
        checkGuess(guessInput.value.toUpperCase())
      }
  }
})

function checkGuess() {
    if (self.previousGuesses.indexOf(guessInput.value) !== -1) {
        wrongInput('You already guessed that noob!');
        guessInput.value = ''
        return;
    }
    for (var i = 0; i < game.students.length; i++) {
      var student1 = game.students[0]
      var student2 = game.students[1]
      var student3 = game.students[2]
      var student4 = game.students[3]
      var student5 = game.students[4]
      var student6 = game.students[5]
      var student7 = game.students[6]
      var student8 = game.students[7]
      var student9 = game.students[8]
      var student10 = game.students[9]
        if (guessInput.value === game.students[i].getInitials()) {
            console.log(game.students[i]);
                if (game.students[i].id === self.rightAnswer) {
                    wrongInput('You win with a score of ' + self.currentScore + ' in ' + self.gameClock + ' seconds!')
                    winner()
                    guessInput.value = ''
                    return;
                } else {
                    if (guessInput.value === student1.getInitials()) {
                      student1Node.classList.add("removeStudent")
                      console.log('SUCCESS')
                    }

                    self.previousGuesses.push(guessInput.value)
                    previousGuess.innerHTML = game.students[i].firstname + ' ' + game.students[i].lastname + ' did not take the pie'
                    self.currentScore--
                    if (self.currentScore === 0){
                      console.log('You have ran out of guesses');
                      gameOver();
                      return;
                    }
                    scoreNode.innerHTML = self.currentScore
                    guessInput.value = ''
                    return;
                }
        }
    }
    wrongInput('No matching student found.')
}

var gameOver = function () {
  clearInterval(gameInterval)
  console.log('GAME OVER')
  self.gameClock = 20;
  currentTime.innerHTML = self.gameClock
  self.previousGuesses = [];
  scoreNode.innerHTML = 5;
  self.isPlaying = false;
  errorNode.innerHTML = ''
  guessInput.value = ''
}

var winner = function () {
  clearInterval(gameInterval)
  console.log('WINNER! ' )
  self.gameClock = 20;
  currentTime.innerHTML = self.gameClock
  self.previousGuesses = [];
  scoreNode.innerHTML = 5;
  self.isPlaying = false;
  errorNode.innerHTML = ' '
}

var wrongInput = function (errorMessage) {
  errorNode.innerHTML = errorMessage;
}
gameTimer()
}
var game = new Game ();
