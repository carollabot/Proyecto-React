const products = [
    {
        "img": "./img/top1.jpg",
        "name": "CAMISA BLACKBERRY",
        "category": "top",
        "info": "Camisa estampada Blackberry. Cartera con botones ocultos. Talle único, oversize, unisex.",
        "precio": 8300,
        "cant": 1,
        "id": 1
    },
    {
        "img": "./img/top2.jpg",
        "name": "MUSCULOSA SEND NUDES OFF WHITE",
        "category": "top",
        "info": "Musculosa de morley con spandex, estilo portaligas con detalles metálicos",
        "precio": 5500,
        "cant": 1,
        "id": 2
    },
    {
        "img": "./img/top3.jpg",
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