// task 1
    let x = 20;
    let y = 58;
    let z = 42;
    console.log (x + y + z);

// task 2
    let second = 60;
    let minute = 60;
    let hour = 24;
    let day = 365;
    let myAgeInSeconds = (21 * day) * hour * minute * second;
    console.log(myAgeInSeconds);

// task 3
    let count = 42;
    let userName = '42';
    // console.log (+userName);
    // console.log (count + '');
    console.log ( Number (userName));
    console.log ( String (count));

// task 4
    let a = 1;
    let b = 2;
    let c = "белых медведей";
    let sum = a + (b + c);
    console.log (sum);

// task 5
    let a = 'доступ';
    let b = 'морпех';
    let c = 'наледь';
    let d = 'попрек';
    let e = 'рубило';
    let lengthWords = (a.length + b.length + c.length + d.length + e.length);
    console.log (lengthWords);

// task 6
    let a = '12';
    let b = 123;
    let c = 'true';
    console.log (`Variable : ${a} have type of ${a}`);

// task 7
    let userName = prompt ('What is your name?','');
    let userAge = +prompt ('How old are you?', '');
    console.log (userAge);
    console.log (userName);

// task 1 adv
    let a = 4;
    let b = 3;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log (a);
    console.log (b);

// task 2 adv
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
    let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];  
    console.log (cipher);