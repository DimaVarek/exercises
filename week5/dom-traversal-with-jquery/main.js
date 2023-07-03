// Spot Check 1
// $('button').click(function () {
//     alert($(this).closest('div').find('span').text())
// })
// Spot Check 2
// $('button').click(function () {
//     alert($(this).closest('body').find('.container').find('p').text())
// })

// When the generator button is clicked, you should console log the following values for its computer:
// The processor ID
// The computer’s data-id - also, push this to an array in an object like this: {cmp_id: id}
// The BUS number

$('.generator').click(function () {
    console.log("The processor ID: "+ $(this).closest('.processor').attr("id"))
    
})