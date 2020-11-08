const sumAll = function(min,max) {
//check input and set min and max
    if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if(min < 0 || max < 0) return "ERROR";
    if(max < min){
        let minMax = min;
        min = max;
        max = minMax;
    }
//loop to add sum
    let sum = 0;
    for(let i = min; i < max + 1; i++){
        sum += i;
    }

    return sum;
};

module.exports = sumAll


