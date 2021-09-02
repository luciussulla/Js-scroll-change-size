const body = document.querySelector('body')
const square = document.querySelector('.square')
document.addEventListener('scroll', changeSize)

let flag = true 
let dimentions = 2

function changeSize() {

    if (flag == true) {
        dimentions += 2
    } else {
        dimentions -= 2 
    }

    if (dimentions >= 200 || dimentions <= 0) {
        flag = !flag
    } 
    
    square.style.height = dimentions + "px"
    square.style.width  = dimentions + "px"

    console.log(dimentions)
}

