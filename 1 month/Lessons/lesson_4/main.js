//DZ 1
// const minNum = (num1, num2) => (num1 < num2) ? alert(num1) : alert(num2)
// minNum(9, 2)

//DZ2
// const userWord = prompt('Введите что либо:').trim()
// const lenString = (word) => alert('Длина строки: ' + word.length)
// lenString(userWord)

//lesson4
//Тема:  DOM

// window.alert('Hello')
// window.confirm('hello')

//Все тегы в HTML в Javascriptе считается объектом

//const h1 = document.getElementById('text')
// const h1 = document.getElementsByClassName('text')
// const h1 = document.querySelector('#text')
// const h1 = document.querySelector('.text')
// console.log(h1)

//const btns = document.querySelectorAll('button')
// Цвета и еще можно сократить,

//  const buttons = document.querySelectorAll('.button')
// for (let button of buttons) {
//     button.addEventListener('click', (e) => {
//         document.body.style.background = e.target.innerText
//     })
// }

//for (let button of buttons) button.onclick = (e) =>  document.body.style.background = e.target.innerText

// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
//
// // window.addEventListener('mousemove',  event => {
// window.onmousemove = e => {
//     posX.innerHTML = e.screenX
//     posY.innerHTML = e.screenY
// }


//Методы массивов
//filter

// const  fruits = ['apple', 'pineapple', 'peach', 'grape']
//
// console.log(fruits)
//
// const result = fruits.filter(fruit => fruit.length === 7)
//
// console.log(fruits);
// console.log(result)

//map()

// const numbers = [2, 21, 120, 89]
//
// const newNumbers = numbers.map(num => num * 2)
//
// console.log(numbers)
// console.log(newNumbers)

//forEach()

// const numbers = [2, 21, 120, 89, 'dfg', 19, false]
//
// let count = 0
//
// numbers.forEach((element) => {
//     console.log(element + 'Сделано')
//     count++
// })
//
// console.log(numbers)
// console.log(`Количество элементов:${count}`)

//slice()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elphant']
//
// console.log(animals)
//
// let  sliceAnimalls = animals.slice(2)
//
// console.log(sliceAnimalls)





for (let i = 0; i < 10; i ++){}
console.log(i)