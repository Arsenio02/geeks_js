// Variable

// var name = 'Arsen'
// console.log(name)

// Не стоит создавать переменные с большими буками
// В JS приветствуется Camelcase пример (myName)

// Типы данных: примитивные и не примитивные
// Примитивные:

// var number = 42; //number
// var someWord = 'Hello i am Arsen' //string
// var hasHair = false //boolean
// var isMarried = true //boolean
// var und //undefined - неопределенный тип данных
// var none = null //null - ничего нет, сами присваеваем значение null

// console.log(none)
// console.log(und)
// console.log(true + true)
// console.log(typeof isMarried)
// typeof - он помогает определяет типы данных

// Не примитивные (ссылочные):

// Array - массив - массив создается с помощью []
// он может хранить в себе множество значении - массивы, типы данных

// ES6
// var arr = [1, 2, 3, 4, 5]
// console.log(arr[5])

// ES5
// var arr = new Array(1, 2, 3, 4)   // это старая версия массива
// console.log(arr)

// object - объект (должен писатся с маленькой буквы)
// чтобы обратится к конкретному объекту мы ставим точку
// потом пишем переменную
// мы можем создать объект внутри объекта
// и еще мы можем создать внутри объекта
// В объекте есть ключи это(переменные) (name, age, address) а в них есть значение
// К ключам можно обратится с помощью [""]

// var person = {
//     name: 'Arsen',
//     age: 20,
//     isMarried: false,
//     address: {
//         street: 'Toktonaliev',
//         number: 50
//     },
//     ['num']: [1, 2, 3, 4, 5]
// }
//
// var arr = [1,2,3,4]

// console.log(person)
// console.log(typeof arr)  // в этом случае массив становится объектом
// console.log(Object)     // Это класс проходим на 7 уроке
// console.log(typeof person)
// console.log(person["address"])
// console.log(person.num)
// console.log(person.address.street)
// console.log(person.person)


// Операторы - математические, условные
// Математические

// console.log(40 + 3423)
// console.log(324 - 342)
// console.log(34523 * 342)
// console.log(5342 / 14)

// Услованые

// console.log( 40 < 2)
// console.log( 40 > 2)
// console.log( 40 >= 2)
// console.log( 40 <= 2)
// console.log( '10' === 1000) // строгое
// console.log( 100 == '100') // не строгое

// Логический оператор -

// console.log(true && true) // логический оператор "И"
// console.log(false && true) // логический оператор "И"
// console.log(true && false) // логический оператор "И"
// console.log(false && false) // логический оператор "И"
// Лог оператор && (И) возвращает false в том случае если один из значении будет false

// console.log(true || true) // Лог оператор 'ИЛИ'


// Условные конструкции if, if else, else

// if (10 < 100) {
//     console.log('верно')
// }

// Встроенные функции

// alert('FUCK YOU')
// confirm('SHIT')
// document.write('SHUT UP')
// prompt('FUCK UP')

// var name = prompt('Введите имя')
// var name = prompt('Введите возраст')
// var name = prompt('Введите возраст')
// var age = Number(prompt('Введите возраст'))

// document.write(name)
// console.log(name)
// console.log(typeof name)
// console.log(typeof age)
// console.log(age)  // выдает NaN (not a number)


// if (age >= 18 && age < 50) {
//     alert('вход разрешен')
// } else if (age < 18) {
//     alert('вход запрещен')
// } else if (age >= 50) {
//     alert('ты уже старпер')
// } else {
//     alert('вводи возраст епта!!!')
// }


// условная конструкция switch case

// var age = Number(prompt('Введите возраст'))
//
// switch (age) {
//     case 18:
//         alert('вход разрешен')
//         break
//     case 17:
//         alert('вход запрещен')
//         break
//     default:
//         alert('ты уже старпер')
//         break
// }