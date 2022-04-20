let reverseArray = function(array){
    let revArray = [];
    let len = array.length-1;
    for(let num in array){
        revArray[num]=array[len];
        len--;
    }
    return revArray;
}

let reverseArrayInPlace = function(array){
    for(let i = 0;i < (array.length/2);i++){
        let index = array.length-1-i;
        let num = array[i];
        array[i]=array[index];
        array[index]=num;
    }
    return array;
}

let array = [1,2,3,4,5];
console.log(reverseArray(array));
let array3 = [11,12,13,14,15];
reverseArray(array3);
console.log(array3);
reverseArrayInPlace(array3);
console.log(array3);
let array2 = [6,7,8,9,10];
reverseArrayInPlace(array2);
console.log(array2);