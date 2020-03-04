class Validator{
  constructor({selector, pattern = {}, method}){
    console.log(selector);
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item => {
      return  item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
    });
    this.error = new Set();
  }

  init(){
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.elementsForm.forEach(elem => this.checkIt({target: elem}));
      if(this.error.size){
        e.preventDefault();
      }
    });
  }

  isValid(elem){
    const validatorMethod = {
      notEmpty(elem){ 
        if(elem.value.trim === ''){
          return false;
        }
        return true;
      },
      pattern(elem, pattern){
        console.log(elem, pattern);
        return pattern.test(elem.value);
      }
    };
    if(this.method){
      const method = this.method[elem.type];
      console.log(method);
      if(method){
        return method.every(item => {
          return validatorMethod[item[0]](elem, this.pattern[item[1]]);
        });
      }
    } else{
      console.warn('Необходимо передать id полей вводы и методы проверки');
    }
    return true;
  }

  checkIt(event){
    const target = event.target;
    if(this.isValid(target)){
      this.showSuccess(target);
      this.error.delete(target);
    } else{
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem){
    elem.classList.remove('success');
    elem.classList.add('error');
    if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
      return;
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSuccess(elem){
    elem.classList.remove('error');
    elem.classList.add('success');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
      elem.nextElementSibling.remove();
    }
  }

  applyStyle(){
    const style = document.createElement('style');
    style.textContent = `body .main-form input.success {
    border: 2px solid green
    }
    body .main-form input.error {
      border: 2px solid red
    }
    .validator-error {
      font-size: 12px;
      font-family: sans-serif;
      color: red;
    }
    `;
    document.head.appendChild(style);
  }
  setPattern(){
    if(!this.pattern.tel){
      this.pattern.tel = /^\+?[78]([-()]*\d){10}$/;
    }
    if(!this.pattern.email){
      this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    }
    if(!this.pattern.text){
      this.pattern.text =  /[а-яА-Я\s\,\.]{3,}/g;
    }
  }
}