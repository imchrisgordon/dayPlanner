moment().format('dddd MMMM Do YYYY');
console.log(moment().format('dddd MMMM Do YYYY'))

// function to display todays day and date
function headerDate() {
    var todaysDate = moment().format('dddd MMMM Do YYYY ');
    $('#currentDay').text(todaysDate);
}
//invoking function to display todays day and date
headerDate();
console.log(headerDate)
//array of time slots
timeSlots = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
console.log(timeSlots)
