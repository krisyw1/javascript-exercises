const removeFromArray = function(passedArray, trashValue) {
let i = passedArray.length; 
//array(loop) = remove then remove
for(;i == 0; i--){
    if(passedArray[i]) === trashValue){
        passedArray.splice(0,i);
    }
}
//end loop
//return
return passedArray;
}

module.exports = removeFromArray
