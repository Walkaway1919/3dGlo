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
      if(timer.timeRemaining < 0){
        clearInterval(interval);
        TimerHours.textContent = '00';
        TimerMinutes.textContent = '00';
        TimerSeconds.textContent = '00';
      }
    }
    let interval = setInterval(upDataClock, 1000);

  }
  let deadline = new Date();
  
  // deadline.setHours(deadline.getHours() + 24);
  deadline.setSeconds(deadline.getSeconds() + 10);

  countTimer( deadline );
  // setInterval(countTimer, 1000, '01 march 2020');



  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuITems = menu.querySelectorAll('ul>li');

    const actionMenu = () => {
      menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', actionMenu);
    closeBtn.addEventListener('click', actionMenu);

    menuITems.forEach((elem) => {
      elem.addEventListener('click', actionMenu);
    });
  };
  toggleMenu();

  const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');


    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        const popupContent = document.querySelector('.popup-content');
        
        if(document.body.offsetWidth > 768){
          popup.style.opacity = 0;
          let finalOp = 100;
          let opCount = 0;
          let oPopUpInterval;
          const fadeIn = () =>{
            opCount +=5;
            if(opCount <= finalOp){
              popup.style.opacity = opCount + '%';
              oPopUpInterval = requestAnimationFrame(fadeIn);
            }else{
              cancelAnimationFrame(oPopUpInterval);
              popupAnimation();
            }
          };
          fadeIn();

          let count = -50;
          popupContent.style.left = -50 + '%';
          let final = 38;
          let speed = 2;
          let popupInterval;
          let popupAnimation = function(){
            count += speed;
            if(count < final){
              popupContent.style.left = count + '%';
              popupInterval = requestAnimationFrame(popupAnimation);
            }else{
              cancelAnimationFrame(popupInterval);
            }
          };
        }

      });
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      popupContent.style.left = '';
    });
  };
  togglePopUp();

  // const animPopUp = () => {



  //   let popupIterval;
  //   count++;
  //   console.log(count);
  //     popupContent.style.left = count * 2 + 'px';
      
  //   };
  //   popupIterval = requestAnimationFrame(animPopUp);


});