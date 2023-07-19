// const getRandomWord = function (callback) {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     setTimeout(() => {
//         callback(words[Math.floor(Math.random() * words.length)])
//     }, 100);
// }

// const getSynonyms = function(word, callback) {
//     let thesauraus = {
//         'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
//         'Astute': ['Sharp', 'Poignant', 'Clever'],
//         'Azure': ['Blue', 'Cyan', 'Sky-blue'],
//         'Bright': ['Luminous', 'Brilliant'],
//         'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
//         'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
//         'Erode': ['Destroy', 'Wear out', 'Tarnish'],
//         'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
//         'Phonic': ['Soundful'],
//         'Ploy': ['Plan', 'Ruse'],
//         'Polaroid': ['Photograph'],
//         'Yap': ['Bark', 'Blab', 'Chatter'],
//         'Yonder': ['There', 'Away', 'Far', 'Afar']
//     }

//     setTimeout(()=>{
//         callback(thesauraus[word])
//     }, 100)
// }

// const getSentiment = function(word, callback) {
//     let wordSentiment = {
//         'Definitive': 1,
//         'Sharp': 1,
//         'Blue': 0,
//         'Luminous': 1,
//         'Plethora': 1,
//         'Slick': -1,
//         'Destroy': -1,
//         'Bother': -1,
//         'Soundful': 0,
//         'Plan': 0,
//         'Photograph': 0,
//         'Bark': -1,
//         'There': -1
//     }
//     setTimeout(()=>{
//         callback(JSON.stringify(wordSentiment[word]))
//     }, 100) 
// }

// const getSentimentDescription = function(sentiment){
//     return sentiment == 1 ? "Positive" : sentiment == -1 ? "Negative" : "Neutral"
// }

// getRandomWord(randomWord => {
//     getSynonyms(randomWord, synonyms => {
        // getSentiment(synonyms[0], meaning => {
        //     console.log(meaning)
        //     console.log(`The word ${randomWord} has a synonym ${synonyms[0]} which has a ${getSentimentDescription(meaning)} sentiment`)
        // })
//     })
// })


// const getRandomWord = function () {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(words[Math.floor(Math.random() * words.length)])
//         }, 1000);
//     })
// }

// const getSynonyms = function (word) {
//     let thesauraus = {
//         'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
//         'Astute': ['Sharp', 'Poignant', 'Clever'],
//         'Azure': ['Blue', 'Cyan', 'Sky-blue'],
//         'Bright': ['Luminous', 'Brilliant'],
//         'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
//         'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
//         'Erode': ['Destroy', 'Wear out', 'Tarnish'],
//         'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
//         'Phonic': ['Soundful'],
//         'Ploy': ['Plan', 'Ruse'],
//         'Polaroid': ['Photograph'],
//         'Yap': ['Bark', 'Blab', 'Chatter'],
//         'Yonder': ['There', 'Away', 'Far', 'Afar']
//     }
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(thesauraus[word])
//         }, 1000);
//     })
// }

// const getSentiment = function (word) {
//     let wordSentiment = {
//         'Definitive': 1,
//         'Sharp': 1,
//         'Blue': 0,
//         'Luminous': 1,
//         'Plethora': 1,
//         'Slick': -1,
//         'Destroy': -1,
//         'Bother': -1,
//         'Soundful': 0,
//         'Plan': 0,
//         'Photograph': 0,
//         'Bark': -1,
//         'There': -1
//     }
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(wordSentiment[word])
//         }, 1000);
//     })
// }

// // No need for promises here
// const getSentimentDescription = function (sentiment) {
//     return sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"
// }

// const randomWordPromise = getRandomWord()
// randomWordPromise.then(randomWord => {
//     const synonymsPromise = getSynonyms(randomWord)
//     synonymsPromise.then(synonyms => {
//         const sentimentPromise = getSentiment(synonyms[0])
//         sentimentPromise.then(meaning => {
//             console.log(`The word ${randomWord} has a synonym ${synonyms[0]} which has a ${getSentimentDescription(meaning)} sentiment`)
//         })
//     } )
// })

// Ex1
// $.get('https://random-word-api.herokuapp.com/word')
//     .then(randomWord => {
//         console.log(randomWord)
//         return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randomWord}`)
//     })
//     .then(bookInfo => console.log(bookInfo))

// Ex2
const getRandomWord = function() {
    return $.get('https://random-word-api.herokuapp.com/word')
}
const getBook = function(inTitle) {
    return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${inTitle}`)
}
const getGif = function(name) {
    return $.get(`http://api.giphy.com/v1/gifs/search?q=${name}&api_key=bZvle0mAld1pODg1HUfinKCCqI5enSwy&limit=1`)
}


getRandomWord()
    .then(word => {
        return Promise.all([getBook(word), getGif(word)])
    })
    .then(answers => {
        console.log(answers)
        $('body').append(`
            <h1>${answers[0].items[0].volumeInfo.title}<h1>
            <img src="${answers[1].data[0].images.original.url}">
        `)
    })
