'use strict';
const checkField = () => {
  document.addEventListener("input", function(e){
    if( e.target.placeholder === 'Ваше имя' ){
      let regexp = /[^а-яА-Я\s\,\.]{0,}/g; // пропускает только кириллицу, знаки препинания и пробелы
      e.target.value = e.target.value.replace( regexp, "" );
    }
    if( e.target.placeholder === 'Номер телефона'){
      let regexp = /^\+?\d{0,11}/g; // пропускает только цифры и + вначале
      e.target.value = e.target.value.match( regexp )[0];
    }
    if( e.target.placeholder === 'Ваше сообщение'){
      let regexp = /[^?!,.а-яА-ЯёЁ0-9\s]+$/; // пропускает только кириллицу, знаки препинания, цифры и пробелы
      e.target.value = e.target.value.replace( regexp, "");
    }
  });
};

export default checkField;