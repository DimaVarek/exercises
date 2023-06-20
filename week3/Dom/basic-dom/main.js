// console.log(document)
// const playingField = document.getElementById("playing-field")
// // console.log(playingField)
// const down = document.getElementById("down")
// // console.log(playingField.innerHTML)
// down.innerHTML = "Down"
// // console.log(down.innerHTML)
// // console.log(playingField.style.backgroundColor)
// // playingField.style.backgroundColor = "red"
// const ball = document.getElementById("ball")
// ball.style.backgroundColor = "yellow"

const moveRight = function(){
    let pos = parseInt(document.getElementById("ball").style.left) || 0
    if (pos + document.getElementById("ball").clientWidth + 15 < document.getElementById("playing-field").clientWidth) {
        pos = pos + 15
    }
    document.getElementById("ball").style.left = `${pos}px`
    console.log(pos)

}
const moveLeft = function(){
    let pos = parseInt(document.getElementById("ball").style.left) || 0
    if (pos - 15 > 0){
        pos = pos - 15
    }
    document.getElementById("ball").style.left = `${pos}px`
    console.log(pos)
}
const moveDown = function(){
    let pos = parseInt(document.getElementById("ball").style.top) || 0
    if (pos + document.getElementById("ball").clientHeight + 15 < document.getElementById("playing-field").clientHeight) {
        pos = pos + 15
    }
    document.getElementById("ball").style.top = `${pos}px`
    console.log(pos)
}
const moveUp = function(){
    let pos = parseInt(document.getElementById("ball").style.top) || 0
    if (pos - 15 > 0){
        pos = pos - 15
    }
    document.getElementById("ball").style.top = `${pos}px`
    console.log(pos)
}

// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// header.setAttribute("class", "my-header")
// document.body.appendChild(header)

// const subHeader = document.createElement("h2")
// subHeader.innerText = "Some Text"
// subHeader.setAttribute("class", "my-header-2")
// subHeader.style.color = "green"
// document.body.appendChild(subHeader)
