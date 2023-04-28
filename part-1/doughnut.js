const Stuffing = require('../stuffing');

class Doughnut {
  constructor(name) {
    this.name = name;
  }
  name = 'Пышка'
  set name() {
    this.name = prompt('Как хотите назвать эту пышку?');
  }

  baseWeight = 60;

  stuffings(arr) {
    let list = [...arr];
    return list;
  }
  get weigth() {
    let grossWeight = this.baseWeight + Stuffing[weight];
    return grossWeight; 
  }


};


module.exports = class Doughnut {
  constructor() {}
};
