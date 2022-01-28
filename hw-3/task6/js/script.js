
let userAge = prompt('Сколько вам лет?', '');

if (userAge >= 16 && userAge <= 18 ) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
} else if (userAge < 18) {
    console.log('Пей колу');
} else if (userAge > 18) {
    console.log('Попей пивка'); 
}
