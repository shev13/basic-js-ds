const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
    console.debug(`push(${element}): ${this.arr}`);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    let elem = this.arr.pop();
    console.debug(`pop(): ${elem}, arr: ${this.arr}`);
    return elem;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    let elem = this.arr[this.arr.length - 1];
    console.debug(`peek(): ${elem}, arr: ${this.arr}`);
    return elem;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack,
};
