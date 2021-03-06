const CustomError = require("../extensions/custom-error");

const chainMaker = {
  items: [],

  getLength() {
    return this.items.length;
  },

  addLink(value = "") {
    this.items.push(`( ${value} )`);
    return this;
  },

  removeLink(i) {
    if (i <= 0) {
      this.items = [];
      throw new Error();
    }
    this.items.splice(i - 1, 1);
    return this;
  },

  reverseChain() {
    this.items.reverse();
    return this;
  },

  finishChain() {
    let answer = this.items.join("~~");
    this.items = [];
    return answer;
  },
};

module.exports = chainMaker;
