const Person = require('./person');

class Salesman extends Person {
  constructor(firstName, patronimc, lastName, phone, dateOfEmployment) {
    super(firstName, patronimc, lastName, phone);
    this.dateOfEmployment = dateOfEmployment;
  }
}

module.exports = class Salesman extends Person {
  constructor() {}
};
