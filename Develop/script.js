// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var date = dayjs();
  var currentHour = date.hour(); //use to set past/present/future classes
  var currentDayEl = $("#currentDay");
  var saveButtonEls = $(".saveBtn"); //array of button elements
  var timeBlockEls = $(".time-block");
  console.log(typeof timeBlockEls);
  currentDayEl.text("Today is: " + date.format("MM-DD-YYYY"));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveButtonEls.on("click", function (event) {
    console.log(event);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  console.log(timeBlockEls[0]);
  console.log(timeBlockEls[0].classList);

  // when i is 0, time is 9AM; when i is 5, time is 2PM (14)
  for (i = 0; i < timeBlockEls.length; i++) {
    if (i + 9 < currentHour) {
      timeBlockEls[i].classList.add("past");
    } else if (i + 9 === currentHour) {
      timeBlockEls[i].classList.add("present");
    } else if (i + 9 > currentHour) {
      timeBlockEls[i].classList.add("future");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
