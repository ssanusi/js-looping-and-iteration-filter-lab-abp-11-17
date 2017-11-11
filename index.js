// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter(function (e) {
    return e === string || e == string

  })

}
function matchName(drivers,string) {
  return drivers.filter(function (e) {
    return e.name === string 

  })

}
