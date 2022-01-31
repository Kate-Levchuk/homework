// task 1
    let a = 'true';
    let b = false;
    let c = 17;
    let d = undefined;
    let e = null;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);

// task 2
    let height = 15;
    let width = 20;
    if (height < width) {
        console.log(width);
    }

// task 3
    for (let i = 1; i< 20; i++) {
        if (i % 3) continue;
        console.log(i);
    }

// task 4
    let key = true;
    let documents = true;
    let pen = true;
    let apple = false;
    let orange = true;
    let shouldGoToWork = key && documents && pen && apple || orange;
        console.log(shouldGoToWork);

// task 5
    let userNumber = +prompt('Введите любое число', '');
    let userMessage = (userNumber % 3 == 0 && userNumber % 5 == 0)  ? 'FizBuz' :
    (userNumber % 5 == 0) ? 'Fiz' :
    (userNumber % 3 == 0) ? 'Buz' :
    ' ';
    console.log(userMessage);

// task 6
    let userAge = prompt('Сколько вам лет?', '');

    if (userAge >= 16 && userAge <= 18 ) {
        console.log('Можешь выкурить сигаретку, только маме не говори');
    } else if (userAge < 18) {
        console.log('Пей колу');
    } else if (userAge > 18) {
        console.log('Попей пивка'); 
    }

// task 7
    let choiceOfCountry = prompt('В какую страну вы бы хотели отпарвиться?','');
    switch (choiceOfCountry) {
        case 'юг' :
            console.log('на юг пойдешь счастье найдешь');
            break;
        case 'север' :
            console.log('на север пойдешь много денег найдешь');
            break;
        case 'запад' :
            console.log('на запад пойдешь верного друга найдешь');
            break;
        case 'восток' :
            console.log('на восток пойдешь - разработчиком станешь');
            break;
        default: 
            console.log('try again');
    }