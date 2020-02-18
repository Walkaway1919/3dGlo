window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  function countTimer(deadline) {
    let TimerHours = document.querySelector('#timer-hours'),
        TimerMinutes = document.querySelector('#timer-minutes'),
        TimerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining(){
      let dateStop = deadline.getTime(),
          dateNow = new Date().getTime(),
          

          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining  % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
      return {
        'timeRemaining': timeRemaining,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
      };
    }
    function upDataClock(){
      let timer = getTimeRemaining();
      TimerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
      TimerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
      TimerSeconds.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
      if(timer.timeRemaining < 1){
        let finishTime = new Date();
        finishTime.setHours( finishTime.getHours() + 24 );
        deadline = finishTime;
        // clearInterval(interval);
        // TimerHours.textContent = '00';
        // TimerMinutes.textContent = '00';
        // TimerSeconds.textContent = '00';
      }
    }
    let interval = setInterval(upDataClock, 1000);

  }
  let deadline = new Date();
  
  // deadline.setHours(deadline.getHours() + 24);
  deadline.setSeconds(deadline.getSeconds() + 10);

  countTimer( deadline );
  // setInterval(countTimer, 1000, '01 march 2020');
});