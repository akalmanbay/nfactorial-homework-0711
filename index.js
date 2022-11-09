//1
function checkAge(age){
    return age>18 ? true: confirm('Родители разрешили?');
}

// //2
function pow(x,n){
    return (n>0)? pow(x,n-1)*x : 1
}
console.log(pow(4,2))

//3
let ask = (question, yes,no) => confirm(question)?yes() : no();

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

//4
let arr = [5, 2, 1, -10, 8];
arr.sort( (a, b) => b - a );
alert( arr ); // 8, 5, 2, 1, -10

//5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
names = users.map(item=>item.name)
alert( names ); // Вася, Петя, Маша

//6
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];
let usersMapped = users.map(item=>({'fullName': item.name.concat(' ',item.surname), 'id':item.id}))

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

//7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr){
    let sum = 0
    arr.forEach(function(item){
        sum+=item['age']
    })
    return sum/arr.length
}
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28