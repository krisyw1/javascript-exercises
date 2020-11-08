const ftoc = function(far) {
  let cel = ((far - 32)*(5/9));
  cel = Math.round(cel * 10) /10;
  return cel;
}

const ctof = function(celc) {

}

module.exports = {
  ftoc,
  ctof
}
