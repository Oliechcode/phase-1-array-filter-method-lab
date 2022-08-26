// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (drivers,driverName){
   return drivers.filter(function(driver){
        return driver.toLowerCase()===driverName.toLowerCase()
    })

}
console.log(findMatching(drivers,'Sally'))

function fuzzyMatch (drivers,string){
    return drivers.filter(function(driver){
        return driver.toLowerCase().startsWith(string.toLowerCase())
    })
}
console.log(fuzzyMatch(drivers,'b'))

const newDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (drivers,driverName) {
    return drivers.filter(function(driver){
        return driver.name === driverName
    })
}
console.log(matchName(newDrivers,'Bobby'));
