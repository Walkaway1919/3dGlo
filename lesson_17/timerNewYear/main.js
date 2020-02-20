
// function getHello( hours ){
//   if( hours < 5 ){
//     return "Доброй ночи";
//   }
//   if( hours < 12 ){
//     return "Доброе утро";
//   }
//   if( hours < 18 ){
//     return "Добрый день";
//   }
//   return "Добрый вечер";
// }
// function getWeekDay(date) {
//   let days = [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//   return `Сегодня: ${days[date.getDay()]}`;
// }
// function getFullDate(date){
//   let time = '';
//   if( date.getHours() > 12 ) {
//     time = date.getHours() - 12;
//     amPm = 'PM';
//   } else {
//     time = date.getHours();
//     amPm = 'AM';
//   }
//   time += ":" + date.getMinutes() + ":";
//   time += ( date.getSeconds() < 10 ) ? "0" + date.getSeconds() : date.getSeconds();
//   time += " " + amPm;
//   return 'Текущее время: ' + time;
// }

// function getNewYear(date){
//   let time = 0;
//   let nyDate = new Date( "1 January " + (date.getFullYear() + 1) + " 00:00:00" );

//   time = Math.ceil( ( nyDate.getTime() - date.getTime() ) / 1000 / 60 / 60 / 24 );
//   return 'До нового года осталось ' + time;
// }
// function printDates(){
//   document.body.innerHTML = '';
//   let thisDate = new Date();
//   let el = document.createElement('div');
//   el.innerHTML = getHello( thisDate.getHours() );
//   document.body.append(el);

//   el = document.createElement('div');
//   el.innerHTML = getWeekDay( thisDate );
//   document.body.append(el);

//   el = document.createElement('div');
//   el.innerHTML = getFullDate( thisDate );
//   document.body.append(el);

//   el = document.createElement('div');
//   el.innerHTML = getNewYear( thisDate );
//   document.body.append(el);

//   setTimeout(printDates, 1000);
// }

// printDates();
