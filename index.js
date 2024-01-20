const returnFirstTwoDrivers = function (x){
  x = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  return x = [x[0],x[1]];
}

const returnLastTwoDrivers = function (x){
  x = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  return x = [x[x.length-2],x[x.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(x){
return function mul(y){
  return x*y;
}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(x, returnLastTwoDrivers){
  x = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  return returnLastTwoDrivers(x);
}