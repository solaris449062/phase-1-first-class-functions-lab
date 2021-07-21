const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2, array.length);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare*multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnDriverFunction) {
    if (returnDriverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    if (returnDriverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}

let driversArray = ["a", "b", "c"]
console.log(returnFirstTwoDrivers(driversArray))
console.log(returnLastTwoDrivers(driversArray))
console.log(selectingDrivers);
console.log(fareDoubler(100))
console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers))

// console.log(fareDoubler(100));