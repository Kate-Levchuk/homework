// task 1
    let user = {
        name: 'Kate',
        age: 21
    };
    delete user.name;
    delete user.age;
    console.log(user);

// task 2
    let user = {
        name: 'Kate',
        age: 21
    };
    console.log('name' in user);

// task 3
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    };
    for (let key in student){
        console.log(key);
        console.log(student[key]);
    }

// task 4
    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    };
    console.log(colors['ru pum pu ru rum'].red);
    console.log(colors['ru pum pu ru rum'].blue);

// task 5
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrei: 664,
        alexandra: 199
    };
    let calcSalaries = (salaries.andrey + salaries.sveta + salaries.anton + salaries.andrei + salaries.alexandra) / 5;
    console.log(calcSalaries);

// task 6
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