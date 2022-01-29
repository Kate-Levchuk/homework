let userName = prompt('Введите логин', '');
let userPassword = prompt('Введите пароль', '');

const user = {
    userName,
    userPassword
};

let verifyUserName = prompt('Подтвердите ваш логин','');
let verifyUserPassword = prompt('Подтвердите ваш пароль','');

if (userName === verifyUserName && userPassword === verifyUserPassword) {
    console.log('Добро пожаловать!');
}

