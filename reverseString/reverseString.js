const reverseString = function(userString) {
let rvrsInput = "";
let i = userString.length - 1
for (;i >= 0; i--){
    rvrsInput += userString[i];
}
return rvrsInput;
}

module.exports = reverseString
