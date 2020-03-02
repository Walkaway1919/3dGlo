document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const carEvent = () => {
        return new Promise((resolve, reject)=>{
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) return;
                if( request.status === 200 ) {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } else {
                    reject(request.status + ' ' + request.statusText);
                }
            });
            request.send();
        });
    };

    select.addEventListener('change', () => {
        carEvent()
            .then((data)=>{
                data.cars.forEach(item => {
                    if (item.brand === select.value) {
                        const {brand, model, price} = item;
                        output.innerHTML = `Тачка ${brand} ${model} <br>
                        Цена: ${price}$`;
                    }
                });
            })
            .catch((status)=>{
                output.innerHTML = 'Произошла ошибка. Статус запроса  - ' + status;
            });
    });
});