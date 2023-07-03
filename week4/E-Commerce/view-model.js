// this will response of the conection beetwen our models and our view
function ViewModel () {
    const model = ECommerce()
    
    const _createProductsPage = function () {
        const products = model.getProducts()
        let productContainer = document.createElement('div')
        productContainer.setAttribute("class", "products-contaiter")
        for (let product of products) {
            const productElement = document.createElement('div')
            productElement.setAttribute("class", "product-card")
            const divImage = document.createElement('div')
            const imageOfProduct = document.createElement('img')
            imageOfProduct.setAttribute("src", product.image)
            divImage.appendChild(imageOfProduct)
            productElement.appendChild(divImage)
            const name = document.createElement('h2')
            name.innerHTML = product.name
            productElement.appendChild(name)
            const price = document.createElement('h4')
            price.innerHTML = product.price
            productElement.appendChild(price)
            const externalDiv = document.createElement('div')
            const divButton = document.createElement('div')
            divButton.innerHTML = "Buy it!"
            divButton.setAttribute('class', 'buy-button')
            divButton.productId = product.id
            const addToCartExternal = function (evt) {
                model.addToCart(evt.currentTarget.productId)
                console.log(model.getCart())
            }
            divButton.addEventListener('click', addToCartExternal, false)
            externalDiv.appendChild(divButton)
            productElement.appendChild(externalDiv)
            productContainer.appendChild(productElement)
        }
        let contentContainer = document.getElementById("main-container")
        contentContainer.innerHTML = ""
        contentContainer.appendChild(productContainer)
    }
    const _createCartPage = function () {
        const cart = model.getCart()
        const divProductsInCart = document.createElement('div')
        divProductsInCart.setAttribute('class', "products-in-cart")
        for (let product of cart) {
            const divProductCard = document.createElement('div')
            divProductCard.setAttribute('class', "product-card-in-cart")

            const imgCard = document.createElement('img')
            imgCard.setAttribute("src", product.image)
            divProductCard.appendChild(imgCard)

            const name = document.createElement('h3')
            name.innerText = product.name
            divProductCard.appendChild(name)

            const counterDiv = document.createElement('div')
            counterDiv.setAttribute('class', 'counter')

            const decreaseButton = document.createElement('button')
            decreaseButton.innerText = "-"
            decreaseButton.productId = product.id
            const decreaseFunc = function(evt) {
                model.decreaseAmount(evt.currentTarget.productId)
                _createCartPage()
            }
            decreaseButton.addEventListener('click', decreaseFunc, false)

            const counterField = document.createElement('p')
            counterField.innerText = product.amount

            const increaseButton = document.createElement('button')
            increaseButton.innerText = "+"
            increaseButton.productId = product.id
            const increaseFunc = function(evt) {
                model.increaseAmount(evt.currentTarget.productId)
                console.log('increase_work')
                _createCartPage()
            }
            increaseButton.addEventListener('click', increaseFunc, false)


            counterDiv.appendChild(decreaseButton)
            counterDiv.appendChild(counterField)
            counterDiv.appendChild(increaseButton)
            divProductCard.appendChild(counterDiv)

            const priceDiv = document.createElement('div')
            priceDiv.setAttribute('class', 'price')
            priceDiv.innerText = product.total
            divProductCard.appendChild(priceDiv)


            divProductsInCart.appendChild(divProductCard)
        }

        const cartSummary = document.createElement('div')
        cartSummary.setAttribute('class', 'cart-summary')
        const p1 = document.createElement('p')
        p1.innerText = "Total: "
        const p2 = document.createElement('p')
        p2.innerText = model.total()

        cartSummary.appendChild(p1)
        cartSummary.appendChild(p2)

        let contentContainer = document.getElementById("main-container")
        contentContainer.innerHTML = ""
        contentContainer.appendChild(divProductsInCart)
        contentContainer.appendChild(cartSummary)

    }
    const _createAboutPage = function () {
        console.log(1)
        let contentContainer = document.getElementById("main-container")
        contentContainer.innerHTML = ""
        const aboutUs = document.createElement('div')
        const section1 = document.createElement('section')
        const h21 = document.createElement('h2')
        h21.innerText = "Our Story"
        const p1 = document.createElement('p')
        p1.innerText = "Welcome to Bicycle Shop, your one-stop destination for all things cycling. We are passionate cyclists ourselves and have been serving the biking community for over a decade. Our journey began with a small store in a local neighborhood, where we provided quality bicycles and accessories to enthusiasts. As our reputation grew, so did our inventory and customer base. Today, we are proud to offer an extensive range of bikes for all ages and skill levels. At Bicycle Shop, we believe that cycling is not just a hobby but a lifestyle. We are dedicated to promoting the joy and benefits of biking by providing top-notch products and exceptional customer service."
        section1.appendChild(h21)
        section1.appendChild(p1)
        aboutUs.appendChild(section1)

        const section2 = document.createElement('section')
        const h22 = document.createElement('h2')
        h22.innerText = "Our Mission"
        const p2 = document.createElement('p')
        p2.innerText = "Our mission is to inspire and empower individuals to embrace cycling as a means of transportation, recreation, and fitness. We strive to create a community of passionate cyclists by offering high-quality bicycles, accessories, and expert guidance. We are committed to sustainability and environmentally friendly practices. We actively support initiatives that promote eco-conscious transportation and work with suppliers who share our values."
        section2.appendChild(h22)
        section2.appendChild(p2)
        aboutUs.appendChild(section2)
        
        contentContainer.appendChild(aboutUs)

    }

    // Create Events for main buttons
    const productsButton = document.getElementById("products-button")
    productsButton.addEventListener('click', _createProductsPage)
    const cartButton = document.getElementById("cart-button")
    cartButton.addEventListener('click', _createCartPage)
    const aboutButton = document.getElementById('about-button')
    aboutButton.addEventListener('click', _createAboutPage)

    return {
        firstPage: _createProductsPage
    }
    

}

var viewModel = ViewModel()
viewModel.firstPage()