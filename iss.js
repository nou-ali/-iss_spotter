const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };

// * Makes a single API request to retrieve the lat/lng for a given IPv4 address.
// * Input:
// *   - The ip (ipv4) address (string)
// *   - A callback (to pass back an error or the lat/lng object)
// * Returns (via Callback):
// *   - An error, if any (nullable)
// *   - The lat and lng as an object (null if error). Example:
// *     { latitude: '49.27670', longitude: '-123.13000' }
// */
const fetchCoordsByIP = function(ip, callback) {
 request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
   if (error) {
     callback(error, null);
     return;
   }

   if (response.statusCode !== 200) {
     callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
     return;
   }

   const { latitude, longitude } = JSON.parse(body);

   callback(null, { latitude, longitude });
 });
};


//module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };
