document.addEventListener('DOMContentLoaded', ()=>{
  let form = document.querySelector('#translator'),
  rus = document.querySelector('#rus'),
  eng = document.querySelector('#eng'),
  status = document.querySelector('#status');
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = {};
    formData.forEach((val, key) =>{
      data[key] = val;
    });
    
    let doAPI = (field, to, from, text) =>{
      let final;
      status.innerHTML = 'Ожидаем перевод';
      fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200303T194712Z.dcb4461f347077a6.f128d14948b4ef75ae1757fc1fba8c61a4df2c7b&lang=' + from + '-' + to,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "text=" + encodeURI(text),
      
      }).then((response)=>{
        return response.json();
      }).then((result)=>{
        console.log(result);
        field.value = result.text[0];
        status.innerHTML = 'Опять готов к работе';
      }).catch((error)=>{
        console.log(error);
        status.innerHTML = 'Смотрите ошибку в консоли';
      });
    };

    if( data.mode === 'to-eng' ){
      doAPI(eng, 'en', 'ru', data.rus);
    }
    if( data.mode === 'to-rus' ){
      doAPI(rus, 'ru', 'en', data.eng);
    }
  });
  status.innerHTML = 'Готов к работе';
});