let mazda = document.querySelector('.red-mazda');
let button = document.querySelector('.button');
let magic = document.querySelector('.magic');
let count = 0;

let rideIterval;
let rideAnimation = function(){
  count++;
  if(count < 560){
    mazda.style.left = count * 2 + 'px';
    rideInterval = requestAnimationFrame(rideAnimation);
  }else{
    cancelAnimationFrame(rideInterval);
  }
};
let animation = true;
button.addEventListener('click', function(){
  if(animation){
  rideInterval = requestAnimationFrame(rideAnimation);
  animation = false;
  }else{
    animation = true;
    cancelAnimationFrame(rideInterval);
  }
});
magic.addEventListener('click', function(){
  mazda.src = 'bmw.png';
  console.log(mazda);
  magic.style.display = 'none';
});