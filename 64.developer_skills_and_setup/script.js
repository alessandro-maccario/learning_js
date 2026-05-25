/* 
CODING CHALLENGE # 1

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Examples: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ... "

Create a function 'printForecast' which takes in the array 'arr' and logs a string like the above to the console.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// define array forecast temperatures
const temp1 = [17, 21, 23];

const printForecast = function (arr) {
  // add to an empty string each array values with their index positions
  let initialString = ``;
  let initialDots = `... `;
  let finalDots = ` ... `;

  for (let i = 0; i < arr.length; i++) {
    initialString += arr[i] + `°C in ${i + 1} days`;
    initialString += finalDots;
  }

  return initialDots + initialString;
};

console.log(printForecast(temp1));
