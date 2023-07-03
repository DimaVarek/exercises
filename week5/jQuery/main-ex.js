// Ex 1 - 2
// $('#input-button').click( function () {
//     const name = $('#input-human').val()
//     $('#input-human').val("")
//     $('#humans').append($(`<li class="human">${name}</li>`))
// })
// $('body').on('click', '.human', function () {
//     $(this).remove()
// })

// Ex 3
// $('.box').hover(function () {
//     $('.box').css('background-color', '#8e44ad')
//     $(this).css('background-color', 'orange')
// })

// ???? How to check hover on 'between'

// Ex 4
// $('.item').click(function () {
//     console.log($(this).data().instock)
//     if ($(this).data().instock) {
//         $('#cart').append(`<div class=cart-item>${$(this).text()}</div>`)
//     }
// })

// Ex 5
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
// ]
// const backet = $('#basket')
// for (let fruit of fruits) {
//     backet.append(`<div class="${fruit.color}">${fruit.name}</div>`)
// }