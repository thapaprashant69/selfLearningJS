let range = function(start,end,step=1){
    let numbers = [];
    let loopNo = Math.abs((start-end)/step);
    for(let i=0;i<=loopNo;i++){
        numbers[i]=start;
        start += step;
    }
    return numbers;
}

let sum = function(numbers){
    let numSum = 0;
    for(let number of numbers){
        numSum += number;
    }
    return numSum;
}

let array = range(1,10,2);
console.log(array);
console.log(sum(array));