const source = $('#gif-template').html();
const template = Handlebars.compile(source);

const renderGifs = function (gifs) {
    $('#gif-container').empty()
    const newGif = template({gifs: gifs})
    $('#gif-container').append(newGif)
}

const getRequestGifs = function (request) {
    const api_key = "bZvle0mAld1pODg1HUfinKCCqI5enSwy"
    const requestStr = request.split(" ").join("+")
    url = `http://api.giphy.com/v1/gifs/search?q=${requestStr}&api_key=${api_key}&limit=6`
    $.ajax({
        method: 'GET',
        url: url,
        success: function (response) {
            let gifs = []
            for (let gif of response.data) {
                gifs.push({'url': gif.images.original.url})
            }
            renderGifs(gifs)
        }
    })
}
$('#input-button').click(function () {
    const request = $('.input-field').val()
    getRequestGifs(request)
})