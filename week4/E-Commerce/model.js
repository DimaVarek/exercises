function ECommerce () {
    const _products = [
        {
            id: 1,
            name: "Bicycle",
            price: 1000,
            image: "images/yellow-black-29er-mountainbike-thick-260nw-1498702814.webp"
        },
        {
            id: 2,
            name: "Bicycle 2",
            price: 2000,
            image: "images/yellow-black-29er-mountainbike-thick-260nw-1498702814.webp"
        },
        {
            id: 3,
            name: "Bicycle 3",
            price: 3000,
            image: "images/yellow-black-29er-mountainbike-thick-260nw-1498702814.webp"
        },
        {
            id: 4,
            name: "Bicycle 4",
            price: 4000,
            image: "images/yellow-black-29er-mountainbike-thick-260nw-1498702814.webp"
        },
        {
            id: 5,
            name: "Bicycle 5",
            price: 5000,
            image: "images/yellow-black-29er-mountainbike-thick-260nw-1498702814.webp"
        }
    ]
    const _cart = []
    const getProducts = function () {
        return _products;
    }
    const getCart = function () {
        return _cart;
    }
    const _getProductFromProducts = function (productId) {
        for (let product of _products) {
            if (product.id == productId) {
                return product;
            }
        }
        return undefined;
    }
    const addToCart = function (productId) {
        let inCart = false
        for (let product of _cart) {
            if (product.id == productId) {
                inCart = true
                product.amount++;
                product.total += product.price
            }
        }
        if (!inCart) {
            let product = _getProductFromProducts(productId)
            _cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                amount: 1,
                total: product.price
            })

        }
    }
    const increaseAmount = function (productId) {
        for (let product of _cart) {
            if (product.id == productId) {
                product.amount+=1
                product.total += product.price
                break;
            }
        }
        console.log(_cart)
    }
    const decreaseAmount = function (productId) {
        for (let product of _cart) {
            if (product.id == productId) {
                if (product.amount > 1) {
                    product.amount-= 1
                    product.total -= product.price
                } else {
                    _cart.splice(_cart.indexOf(product), 1)
                }
                break;
            }
        }
        console.log(_cart)
    }
    const total = function () {
        result = 0
        for (let product of _cart) {
            result += product.total
        }
        return result
    }
    return {
        getProducts: getProducts,
        getCart: getCart,
        addToCart: addToCart,
        increaseAmount: increaseAmount,
        decreaseAmount, decreaseAmount,
        total: total
    }
}