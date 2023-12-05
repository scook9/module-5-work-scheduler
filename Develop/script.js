$(function () {
  var date = dayjs();
  var currentHour = date.hour(); //use to set past/present/future classes
  var currentDayEl = $("#currentDay");
  var saveButtonEls = $(".saveBtn"); //array of button elements
  var timeBlockEls = $(".time-block");

  currentDayEl.text("Today is: " + date.format("MM-DD-YYYY"));

  //go through local storage and fill in text boxes if id is stored as a key
  for (i = 0; i < timeBlockEls.length; i++) {
    if (localStorage.getItem(timeBlockEls[i].id)) {
      timeBlockEls[i].children[1].value = JSON.parse(
        localStorage.getItem(timeBlockEls[i].id)
      );
    }
    console.log(timeBlockEls[i].id);
  }

  // set id of each block to past, present, or future
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

  // store the task div id and task text as a key/value pair
  saveButtonEls.on("click", function (event) {
    var targetKey = event.target.parentNode.parentNode.id;
    var task = event.target.parentNode.parentNode.children[1].value;

    localStorage.setItem(targetKey, JSON.stringify(task));
  });
});
