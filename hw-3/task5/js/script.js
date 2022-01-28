
let userNumber = +prompt('Введите любое число', '');
let userMessage = (userNumber % 3 == 0 && userNumber % 5 == 0)  ? 'FizBuz' :
 (userNumber % 5 == 0) ? 'Fiz' :
 (userNumber % 3 == 0) ? 'Buz' :
 ' ';
 console.log(userMessage);

 