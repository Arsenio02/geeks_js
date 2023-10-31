// 1

// for (let i = 20; i >= 0; i--) {
//     console.log(i)
// }

// 2

// let choiceColor = prompt("Choice color: yellow, red, green").toLowerCase().trim();
//
// let  colors = {
//     red: "red",
//     yellow: "yellow",
//     green: "green",
// }
//
// switch (choiceColor) {
//     case colors.red:
//         alert('STOP')
//         break
//     case colors.yellow:
//         alert('WAIT')
//         break
//     case colors.green:
//         alert('GO')
//         break
//     default:
//         alert('ERROR')
// }


// Функции - Functions
// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.
// Если при вызове функции аргумент не был указан, то его значением становится undefined.

// function declaration - когда мы создаем declaration мы просто пишем ключевое слова function
// если мы напишем вызов функции до или после функции то оно будет работать,
// а в expression - нет.

// function calculate (a, b) {
//     console.log(a, b)
// }
// calculate(2002, 2003)



// function expression - когда мы создаем expression мы создаем переменную
// и к этой переменной присваеваем function

// const calculate = function (a, b) {
//     return console.log(a - b)
// }
// calculate(30, 15)


// Arrow function - стрелочные функции создаются через переменную, return мы можем не писать

// const sayHi = () => {
//     console.log('hi')
// }
//
// sayHi()

// Лямда функции - это функции которые написаны в одну строку

// const sayHi = () => console.log('hi')

// Функция замыкания

// function init() {
//     var name = prompt("Введите имя: ")
//     function displayName() {
//         console.log(name)
//     }
//     displayName()
// }
// init()


// var userAge = Number(prompt('Enter your name: '))

//  Number преобразует строку в число

// var age = (user) => {
//     if (user >= 18) {
//         console.log("OKAY")
//     } else if(user < 18){
//         console.log("NOT OKAY")
//     }else {
//         console.log("ERROR")
//     }
// }
// age(userAge)

// Рекурсия - это когда функция внутри себя вызывает саму себя


// Структурное программирование - это когда код идет сверху вниз
// declaration функции нарушают структураное прогу

// Примеры

// var userAge = Number(prompt('Enter your age: '))

// if (userAge >= 18) {
//     var ageFunc = () => {
//         alert('Вход разрешен!')
//     }
// } else {
//     var ageFunc = () => {
//         alert('До 18 запрещен!!!')
//     }
// }
// ageFunc()


// var ageFunc = (text) => alert(text)
//
// if (userAge >= 18) {
//     ageFunc('OKAY')
// } else {
//     ageFunc('NOT OKAY')
// }

// let numA = Number(prompt("Введите 1 число"))
// let numB = Number(prompt("Введите 2 число"))
//
// const calc = (a, b) => {
//     console.log(a + b + 'сложение')
//     console.log(a - b + 'вычитание')
//     console.log(a * b + 'умножение')
//     console.log(a / b + 'деление')
// }
// calc(numA, numB)

// цифру(число) нельзя умножить на строку (выводит NaN)


// const name = 'Arsen'
//
// function global() {
//     const   name = 'Eldik'
//     return  console.log(name)
// }
// global()
// // console.log(name)


// Анонимные функции
// setInterval() это встроенный метод в JS, внизу это просто пример.
// Он просто отрабатывает функцию которую принимает.
// Если у него нету имени и не можем использовать в других местах это - анонимные функции

// var bob = () => {
//     console.log('bob')
// }
// setInterval(bob, 1000)

// setInterval(() => {
//     console.log('bob')
// }, 1000)

var  sec = 0
setInterval(() => {
    // console.log(sec++)
    sec++
    document.write(" "+sec)
}, 1000)
