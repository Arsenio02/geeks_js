// const input = document.getElementById('input')
// const createButton = document.getElementById('create_todo')
// const todoList = document.getElementById('todo_list')
//
// function createTodo() {
//     if (input.value.trim() === '') {
//         return false
//     }
//     else {
//         const div = document.createElement('div')
//         const text = document.createElement('h3')
//         const buttonsDiv = document.createElement('div')
//         const deleteButton = document.createElement('button')
//         const editButton = document.createElement('button')
//
//         div.setAttribute('class', 'block_text')
//         buttonsDiv.setAttribute('class', 'buttons_div')
//         deleteButton.setAttribute('class', 'delete_button')
//         editButton.setAttribute('class', 'edit_button')
//
//         text.innerText = input.value
//         deleteButton.innerText = 'delete';
//         editButton.innerText = 'edit';
//
//         todoList.append(div);
//         buttonsDiv.append(deleteButton, editButton);
//         div.append(text, buttonsDiv)
//
//         deleteButton.onclick = () => div.remove()
//         editButton.onclick = () => {
//             let editText = prompt(`EDIT: ${text.innerText}`).trim()
//             editText === '' ? text.innerText : text.innerText = editText
//         }
//     }
//     input.value = ''
// }
// createButton.addEventListener('click', createTodo)
// input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)

//ES5
// var num  = 0

//ES6
// let num = 0
// const color = 'ffffff'

// b = 20
// console.log(b)

// let a = 10
//
// if (true) {
//     a = 12
// }
// console.log(a)
//hosting

// function hoisted (){
//     age = 20
// }
// let age
// hoisted()
// console.log(age)


//ES5

// const  array = new Array([1, 2, 3, 4, 5])
// console.log(array);
// console.log(array)

// ES6

// const arr = [1, 2, 3, 4, 5]
// console.log(arr)
// arr.push(6)
// console.log(arr)

// const object = {
//     name: 'Arsen'
// }
// console.log(object)

//

// function sum(a, b) {
//     return console.log(a + b)
// }
// sum(20, 22)

//ES5

// const persons = ['Feliks', 'Nurdin', 'Ilya', 'Atai', 'Igor']
//
// function sum (array) {
//     return array
// }
// // sum(persons)
// console.log(sum(persons));

//ES6
// const persons = ['Feliks', 'Nurdin', 'Ilya', 'Atai', 'Igor']
// const sum = (array) => array
// console.log(sum(persons))

// const returnMin = (a = Number(prompt('a')), b = Number(prompt('b'))) {
//     alert(Math.min(a, b))
// }
// returnMin()

// const calc = (a, b = 0) => console.log(a + b)
// calc(10, 32)

// let calc = 10 / 3
// console.log(typeof calc.toFixed(0))
// console.log(typeof Math.floor(calc))

//Context

// console.log(this)
//
// console.log(obj)
// console.log(object)
//
// console.log(1 + 1)

//
// function log() {
//     console.log(this)
// }
//
// const arrowLog = () => console.log(this)
//
// const person = {
//     name: 'Arsen',
//     age: 19,
//     logThis: log,
//     arrowFunc: arrowLog,
//     delayLog: function () {
//         const self = this
//         setTimeout(function () {
//             console.log(`name: ${self.name} age: ${self.age}`)
//         }, 500)
//     }
// }
// person.delayLog()

// '' "" ``

// const title = 'Hello World'
//
// const template = `
//     <h1 style="color: red">${title}<h1>
// `
// document.body.append(template)

const  persons = [
    {name: 'Nurdin', age: 19},
    {name: 'Kairet', age: 20},
    {name: 'Ivan', age: 17},
    {name: 'Aida', age: 20},
    {name: 'Milana', age: 15},
    {name: 'Ahmad', age: 19},
]

persons.forEach(person => {
    const h1 = document.createElement('h1')
    document.body.append(h1)
    h1.append(`Name: ${person.name}, Age: ${person.age}`)
})