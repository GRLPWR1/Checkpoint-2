class Person {
    constructor(firstName, patronimc, lastName, phone) {
        this.firstName = firstName;
        this.patronimc = patronimc;
        this.lastName = lastName;
        this.phone = phone;
    }
    getFio(){
        let fio = this.firstName + ' ' + this.patronimc + ' ' + this.lastName;
        return fio;
    }
}

module.exports = class Person {
    constructor() {}
  };