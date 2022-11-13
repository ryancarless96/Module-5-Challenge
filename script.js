// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourEl = $('#hour');
let today = new Date()
var minuteEl = $('#minute');
var secondEl = $('#second');
var dayEl = $('#day');
let schedule = JSON.parse(window.localStorage.getItem("schedule")) 
function daySchedule(){
    var time = moment().format('MMM D,YYYY');
    hourEl.text(time);
}

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
$(".saveBtn").on("click", function () {
   let time = $(this).parent().attr("id")
   let value = $(this).siblings(".description").val()
   console.log (time,value)
    let schedule = JSON.parse(window.localStorage.getItem("schedule")) || []
    schedule.push({time,value})
    window.localStorage.setItem("schedule",JSON.stringify(schedule))
    



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
    var currentDate = dayjs('2022-09-11')
    var today = dayjs();
    var days = currentDate.diff(today, 'day');
    $('a').text(days);
});
$(".description").each(function(){
    let id= $(this).parent().attr("id")
    for (let index = 0; index < schedule.length; index++) {
        const element = schedule[index];
        if (id == element.time) {
            $(this).text(element.value)
        }
        
    }
})

let formattedDate = today.getMonth()+ "-" + today.getDate()+ "-" + today.getFullYear()
$("#currentDay").text(formattedDate)