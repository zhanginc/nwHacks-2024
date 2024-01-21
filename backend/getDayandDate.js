const date = new Date();

// uses Date library to get current date in DDMMYYYY format
const getToday = function () {
    const dateno = date.getDate() * 1000000 + (date.getMonth() + 1) * 10000 + date.getFullYear();
    return dateno;
};

// uses Date library to get day of week as a number (0-6) and convert it to corresponding string (Sunday-Saturday)
const getDayofWeek = function() {
    const dayno = date.getDay();
    switch(dayno) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
};

module.exports = { getToday, getDayofWeek }