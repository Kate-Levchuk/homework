// task 1
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(100));

// task 3
function trimString(string, letterFrom, letterTo) {

    return string.substr(letterFrom, letterTo);
}
console.log(trimString('Liza', 0, 2));

// task 4
function getSumNumbers(number) {
    let sum = 0;
    let str = String(number);
    for (let i = 0; i < str.length; i++) {
        sum += +str[i];
    }
    return sum;
}
console.log(getSumNumbers(2021));

// task 6
function fooboo (boolean, foo, boo) {
    function foo() {
        console.log('foo');
    }
    function boo(){
        console.log('boo');
    }
    if (boolean === true) {
        return foo();
    } else {
        return boo();
    }
}

fooboo();
