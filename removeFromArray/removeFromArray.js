const removeFromArray = function(passedArray, ...trashValue) {

    //is rest array longer than 1 value
    //if no call remove
    //if yes loop length of trashValue
        //call remove
    //end


for(let i = 0 ;i < passedArray.length ; i++){
    if(passedArray[i] == trashValue){
        passedArray.splice(i,1);
    }
}

return passedArray;

}

module.exports = removeFromArray
