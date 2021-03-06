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
    if (!text || !key) {
      throw new Error("Not enough informaion.");
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let answer = [];
    let count = 0;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < text.length; i++) {
      if (alphabet.indexOf(text[i]) !== -1) {
        let x =
          (alphabet.indexOf(text[i]) +
            alphabet.indexOf(key[count % key.length])) %
          alphabet.length;
        let cipher = alphabet[x];
        answer.push(cipher);
        count++;
      } else {
        answer.push(text[i]);
      }
    }
    return this.dir ? answer.join("") : answer.reverse().join("");
  }
  decrypt(cipher, key) {
    if (!cipher || !key) {
      throw new Error();
    }

    cipher = cipher.toUpperCase();
    key = key.toUpperCase();

    let text = [];
    let count = 0;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < cipher.length; i++) {
      if (alphabet.indexOf(cipher[i]) !== -1) {
        let x =
          (alphabet.indexOf(cipher[i]) +
            alphabet.length -
            alphabet.indexOf(key[count % key.length])) %
          alphabet.length;

        let deciphed = alphabet[x];
        text.push(deciphed);
        count++;
      } else {
        text.push(cipher[i]);
      }
    }
    return this.dir ? text.join("") : text.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
