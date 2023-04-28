const Person = require('./person');

class Client extends Person {
  constructor(firstName, patronimc, lastName, phone, discount){
    super(firstName, patronimc, lastName, phone);
    this.discount = discount;
  }
}

module.exports = class Client extends Person {
  constructor() {}
};
