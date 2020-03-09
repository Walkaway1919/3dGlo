'use strict';
const photoChange = () => {
  let photos = document.querySelectorAll('.command__photo');
  photos.forEach((elem)=>{
    
    elem.addEventListener('mouseover', (event)=>{
      let temp = event.target.src;
      event.target.src = event.target.dataset.img;
      event.target.dataset.img = temp;
    });
    elem.addEventListener('mouseout', (event)=>{
      let temp = event.target.src;
      event.target.src = event.target.dataset.img;
      event.target.dataset.img = temp;
    });
  });
};

export default photoChange;