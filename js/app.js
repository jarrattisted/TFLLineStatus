// Problem: Get status of line from TFL when typed in
// Solution: Use Node to GET status from TFL on certain lines
// GET	/Line/{ids}

var http = require('http');

// TFL API Keys
var appID = 'fcbd4b88';
var authKey = '96e979501f4df83bce0ed55cf3555411';
var tubeLine = 'victoria';

// Connect to API using TFL keys
var request = http.get('http://api.tfl.gov.uk/line/' + tubeLine + '?app_id=' + appID +
              '&app_key=' + authKey, function (response) {
  // Read the data
  response.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });

  // Parse the data
  // Print the data
});
