'use strict';
function digitalClock() {
let date, hours, minutes, sec, day, weekDay, clockResult, hrs, mins, secs;
 weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
 date = new Date();
 day = date.getDay();
 hours = date.getHours();
 minutes = date.getMinutes();
 sec = date.getSeconds();
if(hours.length < 2) {
   hrs = '0' + hours;
}
if(minutes.length < 2) {
    mins = '0' + minutes;
}
if(sec.length < 2) {
   secs = '0' + sec;
}
 clockResult = weekDay[day] + ': '+ hrs + ': '+ mins + ': '+ secs;
 console.log(clockResult);
 //alert(clockResult);
}
digitalClock();
setInterval(digitalClock(), 1000);