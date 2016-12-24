// Problem: Get status of station from TFL when typed in
// Solution: Use Node to GET status from TFL on certain stations

// TFL API Keys
var appID = 'fcbd4b88';
var authKey = '96e979501f4df83bce0ed55cf3555411';

function printStatus(station, status) {
  var message = 'There are currently ' + status + ' on the ' + station + ' line.';
  console.log(message);
}

printStatus('Victoria', 'minor delays');

// Connect to API using TFL keys
// Read the data
// Parse the data
// Print the data
