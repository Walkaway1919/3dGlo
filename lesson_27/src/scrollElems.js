'use strict';
const scrollElems = () => {
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

  document.addEventListener('click', function(e){
    if(e.target.hash){
      e.preventDefault();
      scrollToEl( e.target.hash );
    }
  });

  const scrollNext = document.querySelector('.scroll-next');
  scrollNext.addEventListener('click', function(e){
    e.preventDefault();
    scrollToEl(this.hash );
  });
};


export default scrollElems;