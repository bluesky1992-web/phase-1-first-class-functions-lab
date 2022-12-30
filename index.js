const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (Arr) {
  //takes an array and return the first  two element without manipulating the original array
  return Arr.slice(0, 2);
};

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (Arr) {
  //takes an array and return the last  two element without manipulating the original array
  return Arr.slice(-2);
};

console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

///////////////
//In this example, createFareMultiplier(4) returns a function that multiplies the input fare by 4. This returned function is then assigned to the constant quadrupleFare. When quadrupleFare(10) is called, it returns 40, which is the input fare of 10 multiplied by the multiplier of 4.

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const quadrupleFare = createFareMultiplier(4);
const fare = 10;
const quadrupledFare = quadrupleFare(fare);
console.log(quadrupledFare);
///////////

const fareDoubler = createFareMultiplier(2); // createFareMultiplier(2) returns a function that multiplies the input fare by 2. This returned function is then assigned to the constant fareDoubler. When fareDoubler(10) is called, it returns 20, which is the input fare of 10 multiplied by the multiplier of 2.
const doubFare = fareDoubler(fare);
console.log(doubFare);

//////////////////

const fareTripler = createFareMultiplier(3); //createFareMultiplier(3) returns a function that multiplies the input fare by 3. This returned function is then assigned to the constant fareTripler. When fareTripler(10) is called, it returns 30, which is the input fare of 10 multiplied by the multiplier of 3.
const triplesFare = fareTripler(fare);
console.log(triplesFare);

///////////////////

function selectDifferentDrivers(drivers, callback) {
  ////selectDifferentDrivers() takes an array of drivers and a callback function as arguments. The callback function can be either returnFirstTwoDrivers() or returnLastTwoDrivers(). When selectDifferentDrivers() is called with returnFirstTwoDrivers() as the callback, it returns the first two drivers in the array. When it is called with returnLastTwoDrivers() as the callback, it returns the last two drivers in the array.
  return callback(drivers);
}

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers); // Output: ['Antonia', 'Nuru']

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers); // Output: ['Amari', 'Mo']
