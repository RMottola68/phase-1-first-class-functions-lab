let testArray = ['steve', 'nancy', 'max', 'cronch', 'hamburglar', 'balogna'];

const returnFirstTwoDrivers = function(arr){
    let firstTwo = [];
    for(let i = 0; i < 2; i++) {
        firstTwo.push(arr[i])
    }
    return firstTwo;
}

const returnLastTwoDrivers = function(arr){
    let lastTwo = [];
    for(let i = arr.length-2; i < arr.length; i++) {
        lastTwo.push(arr[i])
    }
    return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = (mult) => {
    return function (fare) { return mult * fare }
    // let multiplyFare = (fare) => {
    //     return mult * fare;
    // }

    // return multiplyFare();
}

// const multipliedFare = createFareMultiplier();

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// console.log(fareTripler(4));

// console.log(fareDoubler(8));

let selectDifferentDrivers = (arr, cb) => {
    return cb(arr);
}

console.log(selectDifferentDrivers(testArray, returnFirstTwoDrivers));