const ftoc = function(far) {
  let cel = ((far - 32)*(5/9));
  cel = Math.round(cel * 10) /10;
  return cel;
}

const ctof = function(celc) {
  let far = (celc*(9/5))+32;
  far = Math.round(far *10) /10;
  return far;
}

module.exports = {
  ftoc,
  ctof
}
