const body = document.querySelector('body')
const square = document.querySelector('.square')
document.addEventListener('scroll', changeSize)

let flag = true 
let height = 0

function changeSize() {
    console.log("in change")
    if (flag) { 
        height += 4
        square.style.backgroundColor = "red"
    } else { 
        height -= 4
        // square.classList.remove('red')
        square.style.backgroundColor = "blue"
    }
    square.style.height = height + "px"
    if (height > 300 || height <0) {
        flag = !flag
    }   
}
