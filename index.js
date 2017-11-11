// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter(function (e) {
    return e[0].toUpperCase() === string || e[0].toLowerCase() == string

  })

}
function fuzzyMatch(drivers,string) {
  return drivers.filter(function(e){
    return e[0] === string[0];
  })

}
function matchName(drivers,string) {
  return drivers.filter(function (e) {
    return e.name === string;

  })

}
