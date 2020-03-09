'use strict';
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
        const fadeIn = () => { // сначала показываем плавное затемнение 
          opCount +=5;
          if(opCount <= finalOp){
            popup.style.opacity = opCount/100;
            requestAnimationFrame(fadeIn);
          }else{
            popupAnimation(); // после затемнения выводим окно
          }
        };
        fadeIn();

        let count = -50;
        popupContent.style.left = -50 + '%';
        let final = 38;
        let speed = 2;
        let popupAnimation = function(){ // анимация появления окна
          count += speed;
          if(count < final){
            popupContent.style.left = count + '%';
            requestAnimationFrame(popupAnimation);
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
export default togglePopUp;