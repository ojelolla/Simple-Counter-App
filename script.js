
/* get data */

let number= document.getElementById("number")
let num = 0
let prev = document.getElementById("prev")


/* functions */

function increment() {
  num += 1
  number.innerText = num
}


function save() {
  let numStr = num + " - "
  prev.innerText += numStr
  number.innerText = 0
  num = 0
}

function reset() {
  number.innerText = 0
  num = 0
  prev.innerText = ""
}