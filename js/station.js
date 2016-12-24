// Problem: Get status of line from TFL when typed in
// Solution: Use Node to GET status from TFL on certain lines

// Use GET Line/{ids} and list of disruptions using .disruptions

function printStatus(line, status) {
  var message = 'There are currently ' + status + ' on the ' + station + ' line.';
  console.log(message);
}

printStatus('Victoria', 'minor delays');

// Connect to API using TFL keys
// Read the data
// Parse the data
// Print the data
