const student = {
    name: 'John',
    age: 19,
    isHappy: true
};
for (let key in student){
    console.log(key);
    console.log(student[key]);
}
