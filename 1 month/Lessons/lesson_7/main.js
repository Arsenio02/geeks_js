// const words = document.getElementById('words')
// const input = document.getElementById('int')
//
// const reverseWord = e => {
//     let arr = []
//     arr.push(input.value)
//     arr.forEach(word => {
//         const p = document.createElement('p')
//         p.append(word.split('').reverse().join(''))
//         words.append(p)
//     })
//     input.value = ''
// }
// input.onkeydown = e => {e.keyCode === 13 ? reverseWord() : false}


// ООП
//
// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
// console.log(animal)

// class Animals {
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I ll be back')
//     }
// }
//
// const animal = new Animals({
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// })
// animal.voice()
// console.log(animal.type)


// class Wolfs extends Animals {
//     static type = 'WOLF'
//     constructor(options) {
//         super(options);
//         this.hasFang = options.hasFang
//         this.eyeColor = options.eyeColor
//         this.coloHair = options.colorHair
//     }
//     voice() {
//         console.log('I am Wolf')
//     }
//     get ageInfo() {
//         return console.log(this.age * 6)
//     }
//     // set ageInfo(newAge) {
//     //     return console.log(this.age = newAge + 1)
//     // }
// }
//
// const wolf = new Wolfs({
//     name: 'Sharik',
//     age: 9,
//     hasTail: false,
//     hasFang: true,
//     eyeColor: 'black',
//     colorHair: 'grey'
// })
// wolf.voice()
// wolf.ageInfo
//  wolf.ageInfo
// console.log(wolf)


class Component {
    // static component = 'COMPONENT'

    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    hide(){
        this.$element.style.display = 'none'
    }
    show(){
        this.$element.style.display = 'block'
    }
}

class BLock extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
    }
}

const block1 = new BLock ({
    selector: '.block1',
    size: 150,
    color: 'blue'
})
const block2 = new BLock ({
    selector: '.block2',
    size: 200,
    color: 'red'
})
class Circle extends BLock {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}
const circle = new Circle({
    selector: '.circle',
    size: 90,
    color: 'green'
})

circle.hide()
circle.show()