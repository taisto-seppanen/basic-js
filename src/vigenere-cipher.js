const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir) {
    if (dir != true && dir != false) {
      this.dir = true;
    } else {
      this.dir = dir;
    }
  }

  encrypt(text, key) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    let answer = [];
    let couterLetter = 0;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < text.length; i++) {
      if (alphabet.indexOf(text[i]) !== -1) {
        let indexLetterCipherWord =
          (alphabet.indexOf(text[i]) +
            alphabet.indexOf(key[couterLetter % key.length])) %
          alphabet.length;
        let cipherLetter = alphabet[indexLetterCipherWord];
        answer.push(cipherLetter);
        couterLetter++;
      } else {
        answer.push(text[i]);
      }
    }
    return this.dir ? answer.join("") : answer.reverse().join("");
  }
  decrypt(cipher, key) {
    cipher = cipher.toUpperCase();
    key = key.toUpperCase();

    let text = [];
    let couterLetter = 0;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < cipher.length; i++) {
      if (alphabet.indexOf(cipher[i]) !== -1) {
        let indexLettertext =
          (alphabet.indexOf(cipher[i]) +
            alphabet.length -
            alphabet.indexOf(key[couterLetter % key.length])) %
          alphabet.length;

        let currentLetter = alphabet[indexLettertext];
        text.push(currentLetter);
        couterLetter++;
      } else {
        text.push(cipher[i]);
      }
    }
    return this.dir ? text.join("") : text.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
