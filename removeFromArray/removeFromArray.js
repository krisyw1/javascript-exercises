const removeFromArray = function (passedArray, ...trashValue) {


    for (let x = 0; x < trashValue.length; x++) {
        for (let i = 0; i < passedArray.length; i++) {
            if (passedArray[i] === trashValue[x]) {
                passedArray.splice(i, 1);
            }
        }
    }

    return passedArray;

}

module.exports = removeFromArray
