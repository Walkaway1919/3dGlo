const slider = () =>{
  const slide = document.querySelectorAll('.portfolio-item');
  const slider = document.querySelector('.portfolio-content');
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'portfolio-dots';
  slider.append(dotsContainer);
  // создание точек по кол-ву слайдов
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
  let interval; // переменная для регистрации интервала автоматической смены слайдов

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

  // запускает автоплей
  const startSlide = (time = 3000) => {
    dot[currentSlide].classList.add('dot-active');
    interval = setInterval(autoPlaySlide, time);

  };

  // останавливает автоплей
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
      // если клик не по элементам управления
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

  // остановим автоплей по наведению на кнопки управления
  slider.addEventListener('mouseover', (event) => {
    if(event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')){
      stopSlide(event.target.matches('.dot'));
    }
  });

  // восстаановим автоплей по наведению на кнопки управления
  slider.addEventListener('mouseout', (event) => {
    if(event.target.matches('.portfolio-btn') ||
    event.target.matches('.dot')){
      startSlide();
    }
  });

  startSlide(1500); // запустим автоплей
};
export default slider;