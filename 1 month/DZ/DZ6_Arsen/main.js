// 1-задание

// const input = document.getElementById('int')
// const words = document.getElementById('words')
//
// const rev = e => {
//      let arr = []
//      arr.push(input.value)
//      arr.map(word => {
//          const p = document.createElement('p')
//          words.append(p)
//          p.append(word.split('').reverse().join(''))
//      })
// }
// input.onkeydown = e => {e.keyCode === 13 ? rev() : false }


// 2-задание

// const input = document.getElementById('input');
// const output = document.getElementById('output');
//
// input.addEventListener('input', () => {
//     const strings = input.value.split('\n');
//     output.innerHTML = strings.map(str => `<p>${str.split('').reverse().join('')}</p>`).join('');
// });