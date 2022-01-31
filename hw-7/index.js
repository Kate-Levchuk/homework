// task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(function(showArray){
    console.log(showArray);
})

fibonacci.forEach((showArray) => {
    console.log(showArray);
})

//task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const newArray = users.map(function(item, index){
    return `member ${index + 1} : ${item}`;
})

// task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers = numbers.filter(function(){
    return numbers > 0;
})

// task 4
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sum = fibonacci.reduce(function(sum, number){
    return sum + number;
})

// task 5
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const oddNumners = numbers.find(function(item){
    return item % 2 == 0;
})