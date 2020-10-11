const removeFromArray = function(passedArray, trashValue) {

let rtnArray;
//array(loop) = remove then remove
for(let i = 0 ;i < passedArray.length ; i++){
    if(passedArray[i] == trashValue){
        passedArray.splice(i,1);
    }
}
//end loop
//return
return passedArray;

}

module.exports = removeFromArray
