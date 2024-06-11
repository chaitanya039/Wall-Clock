console.log('Welcome to, Wall clock');

function updateClock() {
    // get current time and date
    let currentTime = new Date();

    // lets extract the current time from current date...
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentsecond = currentTime.getSeconds();

    // Pad 0 if the minutes and seconds are less than 10...
    
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;  // for minutes
    currentsecond = (currentsecond < 10 ? "0" : "") + currentsecond;  // for seconds
    
    // choosing the AM/PM according to the time of the day...
    let timeOfDay = (currentHour < 12 ? 'AM' : 'PM');
    
    // converting the railway clock into AM / PM clock...
    currentHour = (currentHour > 12 ? currentHour - 12 : currentHour);
    currentHour = (currentHour == 0 ? currentHour = 12 : currentHour);
    

    // Pad 0 if the hours are less than 10...
    currentHour = (currentHour < 10 ? "0" : "") + currentHour; // for hour


    // Preparing the string of the time to print the time...
    let currentTimeStr = "Clock " + '\n' + currentHour + " : " + currentMinute + " : " + currentsecond + " " + timeOfDay;

    // manupulating the dom of html...
    let clock = document.getElementById('clock');
    clock.innerText = currentTimeStr;
}
