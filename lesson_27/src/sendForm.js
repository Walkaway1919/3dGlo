const sendForm = () => {
  const errorMessage = 'Что-то пошло не так';
  const successMessage = 'Спасибо! Мы с вами свяжемся';
  const loadMessage = 'Загрузка...';
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2 rem;';

  document.addEventListener('submit', (event) => {
    event.preventDefault();
    event.target.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(event.target);

    fetch('./server.php', {
      method: "POST",
      headers: {
        "Content-Type": "form/multipart"
      },
      body: formData,
    }).then((response)=>{
      if(response.status !== 200){
        throw new Error('статус ответа ' + response.status);
      }
      statusMessage.textContent = successMessage;
      event.target.reset();
      return new Promise((ok)=>{
        setTimeout(()=>{
          ok();
        }, 5000);
      });
    })
    .then(()=>{
      statusMessage.style.display = 'none';
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      console.error(error);
    });
    
  });
};
export default sendForm;