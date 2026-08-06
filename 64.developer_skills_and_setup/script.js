/* 
CODING CHALLENGE #1

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

/* 
CODING CHALLENGE #2

Let's say you are building a time tracking application for freelancer. At some point in building this app,
you need a function that receives daily work hours for a certain week, and returns:

1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA = [17.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// arr = [17.5, 8, 6.5, 0, 8.5, 4, 0];
arr = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const workWeekSummary = function (arr) {
  /* General form: array.reduce((accumulator, currentValue) => {
        // return updated accumulator
    }, initialValue)
  */
  // 1. Total hours worked
  const initialValue = 0;
  const totalHoursWorked = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  // 2. Average daily hours
  const averageHoursWorked = arr.reduce((a, b) => a + b) / arr.length;

  // 3. The day with the most hours worked
  const maxHoursWorked = Math.max(...arr);

  // 4. Number of days worked
  const numberOfDaysWorked = arr.filter((element) => element > 0).length;

  // 5. Whether the week was full-time (worked 35 hours or more)
  let fullWeekWorked;
  if (totalHoursWorked >= 35) {
    fullWeekWorked = true;
  } else {
    fullWeekWorked = false;
  }

  return {
    totalHoursWorked,
    averageHoursWorked,
    maxHoursWorked,
    numberOfDaysWorked,
    fullWeekWorked,
  };
};

console.log(workWeekSummary(arr));
