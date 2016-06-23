/*
We are going to create a very simple game.
Things you will have to Google:
1.  Generating a random number(hint: Math.random())
2.  Running a timer (hint: setInterval, clearInterval, etc)
The rules of the game are as follows:
Someone ate Rush's chicken pot pie!  We know it was someone in class, but we don't know who.  Luckily, Tim knows, but he's going to make you guess.
Goals of the game:
1.) When game starts a 20 second timer starts
2.)
*/

// 1.  Use the following array to represent all students:

var students = [
  { id: 1, firstname: "Markham", lastname: "Gross" },
  { id: 2, firstname: "Ari", lastname: "Zamudio" },
  { id: 3, firstname: "Liam", lastname: "Hurt" },
  { id: 4, firstname: "Mike", lastname: "McDermott" },
  { id: 5, firstname: "Dylan", lastname: "Eckert" },
  { id: 6, firstname: "Aaron", lastname: "Martin" },
  { id: 7, firstname: "Markus", lastname: "Brun" },
  { id: 8, firstname: "Blaze", lastname: "Halderman" },
  { id: 9, firstname: "Jayson", lastname: "Smith" },
  { id: 10, firstname: "Svyatoslav", lastname: "Safonov" }
]

var startButton = document.querySelector('.btn')


// 2.  Start the game:

//  2.a Find a random number that represents the id of *one* of the students and store it as a global variable called "rightAnswer"
var rightAnswer = findRandomID()

function findRandomID () {
  for (var i = 0; i < students.length; i++) {
  var randomStudentID = students[i].id
  }
  var randomID = Math.floor(Math.random() * randomStudentID)
  return randomID
}
//  2.b Give the user a starting score of 10 and store it in a global variable called "currentScore"
var currentScore = 10;
//  2.c Create an empty array to save previous guesses, and store it in a global variable called "previousGuesses"
var previousGuesses = []
//  2.d Start a timer using javascript, store & update the result as seconds in a global variable called "gameClock"
var time = 0;
var running = 0;

function startPause () {
  if(running == 0 ){
    running = 1;
    increment();
    document.getElementById("startPause").innerHTML = "pause";
  } else {
    running = 0;
    document.getElementById("startPause").innerHTML = "Resume";
  }
}
function reset () {
  running = 0;
  time = 0;
  document.getElementById("startPause").innerHTML = "Start";
  document.getElementById("output").innerHTML = " : 0 " + " : 0" ;
  previousGuesses = [];

}
function increment(){
  if (running == 1){
  setTimeout(function(){
    time++;
    var secs = Math.floor(time/10)
    document.getElementById("output").innerHTML = " : " + secs;
    increment();
  }, 100);
  if (time/10 == 20){
    alert('Game is over rooky')
    reset()
  }
 }
}

// 3.  Display a prompt:  "Guess who ate the pie?  Enter initials only."
function promptStart () {
  findRandomID()
  while (time < 20){
  var guess = prompt('Guess who ate the pie? (INITIALS ONLY)')
  for (var i = 0; i < students.length; i++) {
    if (guess === students[i].firstname.substring(0,1) + students[i].lastname.substring(0,1)) {
      console.log(students[i])
      previousGuesses.push(guess)
        if (students[i].id === rightAnswer) {
        console.log('Right answer')
      }
    }
  }
}
    if (guess === previousGuesses) {
    console.log('You have already guessed that')
    }
}
function startGame() {
  startPause()
}
//  3.a If the value matches a previous guess, display an alert: "You already guessed that!"

//  3.b If the value matches no initials, display an alert: "No matching student found."
//  3.c If a matching student is found who has not already been guessed, compare their ID to "rightAnswer"
//    3.c.1  If the ID is equal to "rightAnswer", display an alert "You win with a score of [currentScore] in [gameClock] seconds!"
//    3.c.2  If the ID is not equal:
//      3.c.2.a Reduce "currentScore" by 1
//      3.c.2.b Add the incorrect student to "previousGuesses"
//      3.c.2.c Display an alert: "Wrong!  Find the pie!"
//      3.c.2.d Repeat step 3


// 4.  If "gameClock" hits 20 seconds:
//  4.1 Display an alert: "Sorry, you lost without finding pie.  Please try again."
//  4.2 Restart the game by resetting to step 2

// 5.  Allow the game to be restarted at any time by typing "restart()" in the console.
//function promptStart () { 
/*
  while (time < 20){
    var guess = prompt('Guess who ate the mother f#cking pie? (INITIALS ONLY)')
    for (var i = 0; i < students.length; i++) {
      if (guess.toUpperCase() === students[i].firstname.substring(0,1) + students[i].lastname.substring(0,1)) {
        previousGuesses.push(guess)
        if (students[i].id === rightAnswer) {
          console.log('You guessed the right answer')
          break
        }
      }
      for (var i = 0; i < previousGuesses.length; i++) {
        if (guess.toUpperCase() === previousGuesses[i]) {
          console.log('You have already guessed that')
        }      }
  }
}
} */
