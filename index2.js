//const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss_promised');
const {nextISSTimesForMyLocation} = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(nextISSTimesForMyLocation)
//   .then(body => console.log(body));

// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes);
   
  })

  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });