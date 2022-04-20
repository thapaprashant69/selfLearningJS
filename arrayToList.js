let arrayToList = function(funcarray){
    let list = null;
    funcarray.reverse();
    for(let mem of funcarray){
        list = {
            value : mem,
            rest : list
        }
    }
    return list;
};

let listToArray = function(list={}){
    let array = [];
    while(list.rest != null){
        array.push(list.value);
        list = list.rest;
    }
    array.push(list.value);
    return array;
}

let array = [1,2,3,4,5];
let list = arrayToList(array);
console.log(list);
console.log(listToArray(list));