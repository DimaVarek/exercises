// const h1 = $('h1')
// console.log(h1)
// spot check 2
// $('h1').css('color', 'blue')
// $('.red-div').css('color', 'red')
// $('ul > li:first-child').css('color', 'green')
// $('ul > li:last-child').css('color', 'pink')
// $('#brown-div').css('color', 'brown')

// spot check 3
// $('#b1').addClass('box')
// $('#b2').addClass('box')

// spot check 4
// $('#my-input').val('Terabyte')

// spot check 5
// console.log($("#data-element").data().barcode, $("#data-element").data().expirationdate)

// spot check 6
// $('div').hover(() => {
//     $('div').css('background-color', 'blue')
// })

// Spot Check 7
// $('button').click(() => alert($('#my-input').val()))

// Spot Check 8
// my way
// $('.box').hover(() => {console.log($(this))})
// // lesson's way
// $(".box").hover(function(){
//     $(this).css("background-color", "blue")
// })

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)

// Spot Check 9
// $(".feedme").on("click", function(){
//     let divCopy = `<div>${$(this).text()}</div>`
//     $("body").append(divCopy)
//   })

// Spot Check 10
// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for (let person of names) {
//     $("body").append(`<div>${person.first} - ${person.last}</div>`)
// }

// Spot Check 11
// $('.plague').hover(function () {
//     $(this).remove()
// })


// Spot Check 12
// $('#blogs').on('click', function () {
//     for (let i = 0; i < 5; i++) {
//         const innerDiv = '<div class="blog">Some text</div>'
//         $(this).append(innerDiv)
//     }
// })
// $('button').click(function () {
//     $('.blog').text("blargh")
// })