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
  
  deadline.setHours(deadline.getHours() + 24);
  // deadline.setSeconds(deadline.getSeconds() + 10);

  countTimer( deadline );
  // setInterval(countTimer, 1000, '01 march 2020');



  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuITems = menu.querySelectorAll('ul>li');

    const actionMenu = (event) => {
      console.log('open');
      menu.classList.toggle('active-menu');
    };

    // menu.addEventListener('click', function(e){
    //   if (e.target.tagName === 'A'){
    //     actionMenu(e);
    //   }
    // });

    // btnMenu.addEventListener('click', actionMenu);

    // document.addEventListener('click', function(e){
    //   // родитель .menu
    //   // родитель .active-menu и тег a
    //   actionMenu();
    // });

    document.addEventListener('click', (event)=> {
      let target = event.target;
      
      target = target.closest(".menu");
      if( target ){
        actionMenu(event);
        return false;
      }

      target = event.target;
      target = target.closest(".active-menu");
      if( target ){
        if ( event.target.tagName === 'A' ){
          actionMenu(event);
        }
      } else {
        if( menu.classList.contains('active-menu') ){
          menu.classList.remove('active-menu');
        }
      }
    });



  };
  toggleMenu();

  const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupContent = document.querySelector('.popup-content');


    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if(document.body.offsetWidth > 768){
          popup.style.opacity = 0;
          let finalOp = 100;
          let opCount = 0;
          const fadeIn = () =>{
            opCount +=5;
            if(opCount <= finalOp){
              popup.style.opacity = opCount + '%';
              requestAnimationFrame(fadeIn);
            }else{
              popupAnimation();
            }
          };
          fadeIn();

          let count = -50;
          popupContent.style.left = -50 + '%';
          let final = 38;
          let speed = 2;
          // let popupInterval;
          let popupAnimation = function(){
            count += speed;
            if(count < final){
              popupContent.style.left = count + '%';
              requestAnimationFrame(popupAnimation);
            }else{
              // cancelAnimationFrame(popupInterval);
            }
          };
        }
      });
    });

    popup.addEventListener('click', (event)=> {
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popup.style.display = 'none';
        popupContent.style.left = '';
      } else {target = target.closest('.popup-content');
      if(!target){
        popup.style.display = 'none';
      }}
    });
  };
  togglePopUp();

  document.addEventListener('click', function(e){
    if(e.target.hash){
      e.preventDefault();
      scrollToEl( e.target.hash );
    }
  });

  const scrollToEl = (idEl) => {
    
    let el = document.querySelector(idEl);
    if( !el ) return false;
    let scrollFinal = el.offsetTop;
    let scrollStep = window.pageYOffset;
    let speed = ( scrollFinal - scrollStep ) / 60;

    function step(){
      window.scrollTo(0, scrollStep );
      if ( scrollStep >= scrollFinal ){
        window.scrollTo(0, scrollFinal );
      } else {
        scrollStep = scrollStep + speed;
        requestAnimationFrame(step);
      }
    }
    step();
    
  };

  const scrollNext = document.querySelector('.scroll-next');
  scrollNext.addEventListener('click', function(e){
    e.preventDefault();
    scrollToEl(this.hash );
  });

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent =  document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++){
        if(index === i){
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        }else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target =  target.closest('.service-header-tab');
        if (target){
          tab.forEach( (item, i) => {
            if(item === target){
              toggleTabContent(i);
            }
          });
        }
    });
  };
  tabs();


  //слайдер
  const slider = () =>{
    const slide = document.querySelectorAll('.portfolio-item');
    const btn = document.querySelectorAll('.portfolio-btn');
    const slider = document.querySelector('.portfolio-content');

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'portfolio-dots';
    slider.append(dotsContainer);
    let dot = [];
    for(let i = 0; i < slide.length; i++){
      let dotEl = document.createElement('li');
      dotEl.classList.add('dot');
      if(i === 0){
        dotEl.classList.add('dot-active');
      }
      dotsContainer.append(dotEl);
      dot.push(dotEl);
    }

    let currentSlide = 0;
    let interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      dot[currentSlide].classList.add('dot-active');
      interval = setInterval(autoPlaySlide, time);

    };

    const stopSlide = (dots = false) => {
      if (dots){
        dotsContainer.querySelector('.dot-active').classList.remove('dot-active');
      }
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if(!target.matches('#arrow-right, #arrow-left, .dot')){
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      }else if(target.matches('#arrow-left')){
        currentSlide--;
      } else if(target.matches('.dot')){
        dot.forEach((elem, index) => {
          if(elem === target){
            currentSlide = index;
          }
        });
      }
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      if(currentSlide < 0){
        currentSlide= slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
      if(event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')){
        stopSlide(event.target.matches('.dot'));
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if(event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')){
        startSlide();
      }
    });

    startSlide(1500);
  };

  slider();

  // Удалить все элементы со страницы с классом dot (из верстки Index.html)
  // Написать скрипт, который будет на страницу добавлять точки с классом dot равному количеству слайдов




});