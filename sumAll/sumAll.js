const sumAll = function(x,y) {
let maxValue;
let minValue;
let sumSum;
//check input and set min and max
    if(Number.isInteger(+x) && Number.isInteger(+y) && (+x) > 0 && (+y) > 0){
        if(x > y){
            maxValue = x;
            minValue = y;
        } else if(y>x){
            maxValue = y;
            minValue = x;
        }
    } else{
        return "ERROR";
    }
//loop for sum
    for(let i = minValue; i == maxValue; i++){
        console.log(i)
        sumSum = sumSum + i;
    }   
    
//return
    console.log(sumSum)
    return sumSum;
}

module.exports = sumAll
