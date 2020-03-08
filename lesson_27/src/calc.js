const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcDay = document.querySelector('.calc-day');
  const calcCount = document.querySelector('.calc-count');
  const totalValue = document.getElementById('total');
  const countSum = () => {
    let total = 0,
    countValue = 1,
    dayValue = 1;
    let typeValue = calcType.options[calcType.selectedIndex].value;
    let squareValue = parseFloat(calcSquare.value);

    if(calcCount.value > 1){
      countValue += (calcCount.value - 1) / 10;
    }

    if(calcDay.value && calcDay.value < 5){
      dayValue *= 2;
    }else if(calcDay.value && calcDay.value < 10){
      dayValue *= 1.5;
    }

    if(typeValue && squareValue){
      total = Math.floor( price * typeValue * squareValue * countValue * dayValue );
    } 

    let start = +totalValue.textContent;
    let speed = Math.ceil( (total - start) / 30 );
    requestAnimationFrame(function scrollNum(){
      start += speed;
      let animate;
      if( speed > 0 ){
        animate = start < total;
      } else {
        animate = start > total;
      }
      if ( animate ){
        totalValue.textContent = start;
        requestAnimationFrame(scrollNum);
      } else {
        totalValue.textContent = total;
      }
    });
  };
  
  calcBlock.addEventListener('change', (event) => {
    const target = event.target;
    if(target.matches('select') || target.matches('input')){
      countSum();
    }
  });

  calcBlock.addEventListener("input", function(e){
    const target = e.target;
    if(target.matches('input')){
      let regexp = /[^\d]{0,}/g;
      target.value = e.target.value.replace( regexp, "" );
    }
  });

};
export default calc;