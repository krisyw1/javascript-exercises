const repeatString = function(phrase, reps) {
    let x = reps;
    let message = '';
    if (x < 0){
        return 'ERROR';
    }
    for (;x > 0; x--){
        message = message + phrase;
    }
    return message;
}

module.exports = repeatString
