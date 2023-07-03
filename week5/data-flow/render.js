function Render () {
    function renderPosts (posts) {
        $('#posts-holder').empty()
        for (let post of posts) {
            const postDiv = $(`<p><b>${post.name}:</b> ${post.message}</p>`)
            $('#posts-holder').append(postDiv)
        }
    }
    function getPostsInfo () {
        const name = $('#input-name').val()
        const message = $('#input-message').val()
        $('#input-name').val("")
        $('#input-message').val("")
        return {name, message}
    }
    return {
        renderPosts,
        getPostsInfo
    }
}