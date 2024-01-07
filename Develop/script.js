// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


//first I need to write a function that includes day.js 
//to display and update the time at the top of the page.
//I then need to write a fucntion that differitiates the timeblocks
//according to when the user is actually usuing the app vs past or present.
//I need to write a function that adds an event listener to the save button.
//This function needs save events the user puts in each timeblock.

function displayTimeCurrent() {
  const currentTimeElement = document.getElementById('Currect-cloc');
setInterval(function() {
   const CurrentTime = dayjs(); 
   const FormatT = CurrentTime.format('HH:mm:ss');
   currentTimeElement.innerText = 'Current-clock' + FormatT;
  }, 1000); 
  console.log("it works")
}

displayTimeCurrent()





$(function () {

});