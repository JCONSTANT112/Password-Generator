// Start working code
// User variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password criteria variables: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Number characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters Uppercase and Lowercase
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alphaUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;


var get = document.querySelector("#generate");

get.addEventListener("click", function() {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// begin function to generate password
function generatePassword() {
    // Ask for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // This section validates user inputs
        // Start user prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        //User input is validated and then continues
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // User selects no options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First statement to confirm all positive options
    // User selects 4 options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alphaUp);
    }
    // User selects 3 options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphaUp);
    } else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alphaUp);
    } else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alphaUp);
    }
    // User selects 2 options
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphaUp);
    } else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alphaUp);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphaUp);
    }
    // User selects one option
    else if (confirmCharacter) {
        choices = character;
    } else if (confirmNumber) {
        choices = number;
    } else if (confirmLowercase) {
        choices = alpha;
    } else if (confirmUppercase) {
        choices = alphaUp
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Starts random generation of password determined by length and choices: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    //Joins password array converting it into a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// password value input into textbox.
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}