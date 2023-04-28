class Group{
    constructor(arr){
        this.group = [...arr];
    }
    getFios(arr){
        let groupFios = '';
        for (let i = 0; i < arr.length; i++){
            groupFios = arr[i].getFio + ', ';
        }
        return groupFios;
    }
}

module.exports = class Group {
    constructor() {}
  };