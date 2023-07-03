const model = Model()
const render = Render()

const buttonId = "#input-button"

$(buttonId).click(function () {
    const newPost = render.getPostsInfo()
    model.addMessage(newPost.name, newPost.message)
    render.renderPosts(model.getMesssages())
})

render.renderPosts(model.getMesssages())