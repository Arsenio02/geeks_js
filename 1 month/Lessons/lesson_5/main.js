const input = document.getElementById('input')
const createButton = document.getElementById('create_todo')
const todoList = document.getElementById('todo_list')


const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    }
    else  {
        const div = document.createElement('div')
    const text = document.createElement('h3')

    div.setAttribute('class', 'block_text')
    text.setAttribute('class', 'text')

    text.innerText = input.value
    div.append(text)
    todoList.append(div)


    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)





// let object = {
//     name: 'Arsen',
//     age: 20,
//     dev: 'front',
//     address: {
//         city: 'Bishkek',
//         street: 'Toktonaliev',
//         numOfHouse: '50',
//     },
//     married: false
// }
//
// console.log(object.address.city)
//
// let married = object.married
// married = true
//
// console.log(object)









// createButton.onclick = () => {
//     if (input.value.trim() === '') return false
//
//
//
//     const div = document.createElement('div')
//     const text = document.createElement('h3')
//
//     div.setAttribute('class', 'block_text')
//     text.setAttribute('class', 'text')
//
//     text.innerText = input.value
//     div.append(text)
//     todoList.append(div)
//
//     input.value = ''
// }