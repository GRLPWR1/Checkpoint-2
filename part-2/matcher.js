class Matcher {
  constructor(participants){
    this.participants = participants;
  }
  getFemales(participants){
    let females = [];
    for (let i = 0; i < participants.length; i++){
      if (participants[i].gender == 'female') {
        females.push(participants[i]);
      }
    }
    return females;
  };
  getMales(participants){
    let males = [];
    for (let i = 0; i < participants.length; i++){
      if (participants[i].gender == 'male') {
        males.push(participants[i]);
      }
    }
    return males;
  };
  generatePairs(participants){
    let pairs = [];
    if (participants.length % 2 !== 0) {
      alert('Нечётное число участников!');
    } else {
      if (pairs.length == 0) {
        let newPair = this.getFemales.splice(0, 1);
        newPair.push(this.getMales[0]);
        pairs.push(newPair)
      } else {}

      }
      



      for (let el of participants){
        let newPair = [];
        if (el.gender == 'male'){
          newPair[0] = el;
        } else if (el.gender == 'male'){
          newPair[1] = el;
        }
        if (newPair.length == 2){
          pairs.push(newPair);
        }
      }
    }
    return pairs;
  };
  addLike(participant, interest) {
    return alert(`Участнику(-це) ${participant} понравился (-лась) ${interest}`);
  }
  getLikes()
  whoLikes()
}


module.exports = class Matcher {
  constructor() {}
};
