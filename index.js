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

// function createFareMultiplier(int) {
//     return (fair) => {
//         return int * fair;
//     }
// }
// const fareMultiplier = createFareMultiplier(2);
// console.log(fareMultiplier)


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
