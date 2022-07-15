let password = "coding4lyfe"
const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const ALPHA_ARRAY = ALPHABET.split('')
let containsNum = false
let containsLetter = false
let containsSpace = false

//check for numbers
for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
        containsNum = true
        break
    }
}

//check for letters
for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < ALPHA_ARRAY.length; j++) {
        if (password[i].includes(ALPHA_ARRAY[j])) {
            containsLetter = true
            break
        }
    }
    break
}

//check for spaces (additional check)
(password.split('')).forEach(char => {
    if (char === ' ') {
        containsSpace = true
    }
})

//Validation                //max length additional check here
if (password.length >= 10 && password.length < 20 &&
    containsLetter && containsNum && !containsSpace){
    console.log(`Password is successful!
     ____   ____   ____  __  __ _ 
    |  _ \\ / __ \\ / __ \\|  \\/  | |
    | |_) | |  | | |  | | \\  / | |
    |  _ <| |  | | |  | | |\\/| | |
    | |_) | |__| | |__| | |  | |_|
    |____/ \\____/ \\____/|_|  |_(_)
                                      `);
} else {
    console.error('Error! Your password must contain at least 10 and no more than 20 characters, including 1 number, 1 letter, and have no spaces!')
}



