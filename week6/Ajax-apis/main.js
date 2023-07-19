// $.get('https://www.googleapis.com/books/v1/volumes?q=Name+of+the+Wind', function (responce) {
//     console.log(responce.items[0].volumeInfo.description)
// })


// Ex1
// const fetch = function(isbn) {
//     $.ajax({
//         method: 'GET',
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (response) {
//             console.log(response.items[0].volumeInfo.title)
//             console.log(response)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch(9780575087057)

// Ex2
// const fetch = function(queryType, queryValue) {
//     let url = "https://www.googleapis.com/books/v1/volumes?q="
//     if (queryType == "isbn"){
//         url += queryValue
//     } else {
//         url += "title" + queryValue.split(" ").join('%20')
//         console.log(url)
//     }
//     $.ajax({
//         method: 'GET',
//         url: url,
//         success: function (response) {
//             console.log(response.items[0].volumeInfo.title)
//             console.log(response)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("title", "How to Win Friends and Influence People")

// Ex3
const fetch = function(queryType, queryValue) {
    let url = "https://www.googleapis.com/books/v1/volumes?q="
    if (queryType == "isbn"){
        url += queryValue
    } else {
        url += "title" + queryValue.split(" ").join('%20')
        // console.log(url)
    }
    const printData = item => {
        const title = item.volumeInfo.title
        const author = item.volumeInfo.authors[0]
        const isbn = item.volumeInfo.industryIdentifiers[0].identifier
        console.log(title, author, isbn)
    }
    $.ajax({
        method: 'GET',
        url: url,
        success: function (response) {
            response.items.forEach(element => {
                printData(element)
            });
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch("title", "How to Win Friends and Influence People")