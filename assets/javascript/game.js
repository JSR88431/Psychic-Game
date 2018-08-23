var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var chances = 10;
var attempt = [];




document.onkeyup = function (event) {

    // For random computer letter
    var random = alphabet[Math.floor(Math.random() * alphabet.length)];
    // Lowercase letters only
    var guess = event.key.toLowerCase();

    // List of all attempted key
    attempt.push(guess);

    if (guess === random) {
        wins++;
        chances = 10;
        attempt = [];
    }
    else if (guess !== random) {
        chances--;
    }

    if (chances < 1 || chances < 0) {
        losses++;
        chances = 10;
    }


    if (losses === 6) {
        alert("GAME OVER! RELOAD GAME!");
        attempt = [];
    }


    var spanWins = document.getElementById("wins");
    spanWins.textContent = wins;

    var spanLoss = document.getElementById("loss");
    spanLoss.textContent = losses;

    var spanAttempt = document.getElementById("showAttempt");
    spanAttempt.textContent = attempt;

    var spanGuess = document.getElementById("guess");
    spanGuess.textContent = chances;

}