//array of words to choose from
var randomWordarr = ["watterson", "darwin", "mr Dad", "anais", "nicole"];


// some globals
var s;
var score = 12;
var randomWord;


//empty array to store guesses
var answerArray = [];
var incorrectArray = [];
var correctArray = [];
var generalArray = [];

//filling the empty array with underscores
//the number of underscores match the random word generate
function startup() {
    //this chooses a word at random from array
    randomWord = randomWordarr[Math.floor(Math.random() * randomWordarr.length)];

    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }

    // //put words underscores on html and words in string    
    s = answerArray.join(" ");
    console.log(s);

}

// function letter ()
// {
document.addEventListener('keyup', function (event) {
    // letter user typed in field
    var letter = event.key;



    for (var i = 0; i < randomWord.length; i++) {

        if (randomWord.indexOf(letter) === -1) {
            incorrectArray.push(letter)
            console.log(incorrectArray);
            score--;
            document.getElementById("answer").innerHTML = s;
            if (generalArray.indexOf(letter) === -1) {
                generalArray.push(letter)
                document.getElementById("answer").innerHTML = generalArray.join(" ");
                console.log(generalArray);

            }
        }




        //now if the user selects a letter from randomWord
        if (randomWord[i] === letter) {
            correctGuess = true;
            //assign it to letter
            answerArray[i] = letter;
        }


    }



    // displays letters guessed wrong in html
    document.getElementById("counter").innerHTML = "Wrong Guesses: " + score;

    // displays letters guessed correctly in __ fields
    document.getElementById("answer").innerHTML = answerArray.join(" ");

    // will add guesses to  "letters already guessed" field
    document.getElementById("guesses").append(letter + ",")






});

startup()


