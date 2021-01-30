var students = [
    {
        name: "Khanh Qui",
        age: 20,
    },
    {
        name: "Pro",
        age: 20,
    },
    {
        name: "Vip",
        age: 20,
    }
];

var totalAge = students.reduce(
    (a, b) => a + b.age, 0
);

console.log(totalAge);

var newName = students.reduce(
    (a, b) => a + " " + b.name, ""
);

console.log(newName);

var ages = [1, 2, 3, 4];
var reduceOneEachLoopAndPlus10AtEnd = ages.reduce(
    (a, b) => a + b - 1, 10
    // each loop: 
    //  1-1
    // +2-1 
    // +3-1 
    // +4-1 
    //end loop and +10 = 16
    //<=> sum += ages[i] -1;
    //and when end loop => sum + 10 => 16
);
console.log(reduceOneEachLoopAndPlus10AtEnd);

//<=>
function testLogicAbove(ages){
    var sum=0;
    ages.forEach(element => {
        sum += element -1;
    });
    return sum+10;
}

console.log(testLogicAbove(ages));