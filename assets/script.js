moment().format('MMMM Do YYYY');

console.log(moment().format('MMMM Do YYYY'))

function headerDate() {
    var todaysDate = moment().format('dddd MMMM Do YYYY ');
    $("#currentDay").text(todaysDate);
}
headerDate();


