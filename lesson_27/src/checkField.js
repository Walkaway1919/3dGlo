const checkField = () => {
  document.addEventListener("input", function(e){
    if( e.target.placeholder === 'Ваше имя' ){
      let regexp = /[^а-яА-Я\s\,\.]{0,}/g;
      e.target.value = e.target.value.replace( regexp, "" );
    }
    if( e.target.placeholder === 'Номер телефона'){
      let regexp = /^\+?\d{0,11}/g;
      e.target.value = e.target.value.match( regexp )[0];
    }
    if( e.target.placeholder === 'Ваше сообщение'){
      let regexp = /[^?!,.а-яА-ЯёЁ0-9\s]+$/;
      e.target.value = e.target.value.replace( regexp, "");
    }
  });
};

export default checkField;