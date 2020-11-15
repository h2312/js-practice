// Given a year, report if it is a leap year 
const isLeapYear = (year) => {
    if(year % 400 == 0) return true;
    if(year % 4 == 0 && year % 100 != 0) return true;
    return false
}

console.log(isLeapYear(2020))