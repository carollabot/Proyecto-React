const products = [
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/camisa-blackberry-hombre-211-85e597d6a5bbe59e8b16534269199202-1024-1024.jpg",
        "name": "CAMISA BLACKBERRY",
        "category": "top",
        "info": "Camisa estampada Blackberry. Cartera con botones ocultos. Talle único, oversize, unisex.",
        "precio": 8300,
        "cant": 1,
        "id": 1
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/top-sport-31-413284289319243ef916632654270039-1024-1024.jpg",
        "name": "TOP MAMBA SPORT",
        "category": "top",
        "info": "Top deportivo con elástico mamba en bajo busto.",
        "precio": 5500,
        "cant": 1,
        "id": 2
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/polera-celebrity-11-d4873fc062bd13bf0b16618903508223-1024-1024.jpg",
        "name": "POLERA TIGRESA",
        "category": "top",
        "info": "Polera estampada con logos. tela spandex. La imagen es referencial, el color puede variar.",
        "precio": 6200,
        "cant": 1,
        "id": 3
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500 )
    })
}

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000 )
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}