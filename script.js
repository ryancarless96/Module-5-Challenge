// code that interacts with the DOM in a call to jQuery to ensure that the code isn't run 
// until the browser has finished rendering all the elements in the html.
var hourEl = $('#hour');
let today = new Date()
var minuteEl = $('#minute');
var secondEl = $('#second');
var dayEl = $('#day');
let schedule = JSON.parse(window.localStorage.getItem("schedule")) 
function daySchedule(){
    dayjs().format()
    $("#currentDay").text(formattedDate); 
    dayjs().calendar()
    
}

// listener for click events on the save button. The code uses the id in the containing time-block as a key to save the user input in
// local storage. 
$(".saveBtn").on("click", function () {
   let time = $(this).parent().attr("id")
   let value = $(this).siblings(".description").val()
   console.log (time,value)
   // code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
   // code saved in localStorage and set the values of the corresponding text area elements.   
    let schedule = JSON.parse(window.localStorage.getItem("schedule")) || []
    schedule.push({time,value})
    window.localStorage.setItem("schedule",JSON.stringify(schedule))
    
  //header to display the current date in the header of the page.
    var currentDate = dayjs('#currentDay')
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
$("#currentDay").text(formattedDate);

setInterval(daySchedule,1000);

