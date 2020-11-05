const sumAll = function(x,y) {
let maxValue;
let minValue;
let sumSum = 0;
//check input and set min and max
    if(Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0){
        if(x > y){
            maxValue = x;
            minValue = y;
        } else{
            maxValue = y;
            minValue = x;
        }
    } else{
        return "ERROR";
    }
//loop for sum
    for(i = minValue; i == maxValue; i++){
        sumSum = sumSum + i;
    }   
    
//return
    return sumSum;
}

module.exports = sumAll
