const today = new Date();
function getMarker(time) {
  return (
    "" + today.getFullYear() + (today.getMonth() + 1) + today.getDate() + time
  );
}
console.log(today)
//Returns the remainder of hours, military to standard timing
function getFormattedHours(hours) {
  if (hours >= 12) return hours == 12 ? "12 PM" : (hours % 12) + " PM";
  else return hours + " AM";
}

window.onload = function () {
  document.querySelector("#currentDay").innerText = new moment().format(
    "dddd MMMM Do YYYY"
  );
  const hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
  let lineEntry = "";
  hours.forEach(function (item) {
    lineEntry +=
      '<form class="row"><div class="col-md-2 hour">' +
      getFormattedHours(item) +
      '</div><div class="col-md-9 description p-0"><textarea id="text' +
      item +
      '" data-time="' +
      item +
      '"></textarea></div><button class="col-md-1 saveBtn" data-time="' +
      item +
      '" type="button"><i class="far fa-save fa-lg"></i></button></form>';
  });
  console.log(hours)
  console.log(getFormattedHours)
  
  document.querySelector("#lineEntries").innerHTML = lineEntry;
  document.querySelectorAll("textarea").forEach(function (item) {
    let time = item.getAttribute("data-time"),
      hours = today.getHours();
    if (time == hours) item.classList.add("present");
    if (time < hours) item.classList.add("past");
    if (time > hours) item.classList.add("future");
    item.value = localStorage.getItem(getMarker(time));
  });
  //Saves input to local storage
  document.querySelectorAll("button").forEach(function (item) {
    let time = item.getAttribute("data-time");
    item.addEventListener("click", function () {
      localStorage.setItem(
        getMarker(time),
        document.querySelector("#text" + time).value
      );
    });
  });
};
