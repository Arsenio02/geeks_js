// Конкатенация строк
//
// let user = {
//     pass: '12345',
//     name: 'Arsen',
//     age: 20
// }
//
// console.log('Пароль: ' + user.pass)
// console.log('Имя: ' + user.name)
// console.log('Возраст: ' + user.age)


// Переопределение переменных

// console.log()
//
// let num1 = 12
// let num2 = 100


// const numberStr = '42'

//  Циклы
// 1 while

// let count = 0
//
// while (count <= 10) {
//     // console.log(count = count + 1)
//     // console.log(count++)
//     // console.log(++count)  // бесконечно
// }

// 2 for

// let arr = [1,2,3,4,5]
//
// // console.log(arr)
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// let arr = []
// arr.push(1)    // метод push добавляет элемент в начало массива
// console.log(arr)
//
// for (let i = 0; i < 100; i++) {
//     arr.push(i)
// }
// console.log(arr)

// for of - не работает с пустыми массивами

// let arr = [1,2,3,4,5,6,7,'arr1',8,false,undefined,'223']
//
// for (let i of arr) {
//
//     if (i === Number(i)){
//         console.log(i)
//     }
//     // console.log(i)
// }


//  for in

// let obj = {
//     string: 'some str',
//     number: 42,
//     'key': false,
//     [null]: {
//         name: 'Arsen',
//     },
//     sayHi (){
//         console.log('HI')
//     }
// }

// console.log(["number"])

// obj.sayHi()

// интерполяция строк

// for (let i in obj) {
//     console.log(`Ключ: ${i}, Значение: ${obj[i]}`)
// }

// for in - чаще применяется к объектам

// let arr = ["a","b","c","d","e"]
// console.log(arr)

// метод push() добавляет элемент в конец массива
// arr.push("f")
// console.log(arr)

// метод unshift() добавит элемент в начало массива
// arr.unshift("g")
// console.log(arr)

// метод pop() удалит элемент с конца массива
// arr.pop()
// console.log(arr)

// метод shift() удалит элемент сначала массива
// arr.shift()
// console.log(arr)

// Доп информации

