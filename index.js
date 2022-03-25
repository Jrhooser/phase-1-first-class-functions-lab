// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let newArray = [];
    for(let i=0; i<2; i++){
        newArray[i] = drivers[i];
    }
    return newArray;
}
const returnLastTwoDrivers = function(drivers){
    const newArray = [];
    // for(let i=drivers.length-2; i<drivers.length; i++){
    //     newArray[i] = drivers[i];
    // }
    newArray[0] = drivers[drivers.length-2];
    newArray[1] = drivers[drivers.length-1];
    return newArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    }
}
const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;
}
const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3;
}
function selectDifferentDrivers(arrayOfDrivers, func){
    if(func == returnFirstTwoDrivers){
        return arrayOfDrivers.slice(0,2);
    }
    else{
        return arrayOfDrivers.slice(arrayOfDrivers.length-2, arrayOfDrivers.length);
    }
}