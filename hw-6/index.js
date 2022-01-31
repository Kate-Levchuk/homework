// task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.pop());

// task 3
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, );
console.log(numbers);

// task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey')
console.log(students);

// task 5
const cats = ['Gachito', 'Tom', 'Batman'];

for (let cat of cats) {
    console.log(cat);
}

for (let i = 0; i < cats.length; index++) {
    console.log(cats[i]);
}

// task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let numbers = evenNumbers.concat(oddNumbers);
console.log(numbers.indexOf(8));

// task 7
const binary = [0, 0, 0, 0];
const newBinary = binary.join('1');
console.log(newBinary);