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
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/polera-fancy-hombre-2-111-3a558d61ef3168d06b16523878669081-1024-1024.jpg",
        "name": "THE NEW MILLIONARE SOFT BLUE",
        "category": "bottom",
        "info": "Jean low rise (tiro bajo), WIDE LEGS (piernas anchas). Denim de algodón con logos BB.",
        "precio": 14600,
        "cant": 1,
        "id": 4
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/biker-mamba-sport-celebrity-51-2559dc5c74744e24b016663827174784-1024-1024.jpg",
        "name": "BIKER GRANDPA CELEBRITY",
        "category": "bottom",
        "info": "Short  estampado Celebrity. Es una prenda tipo biker en el tiro y cadera.",
        "precio": 6800,
        "cant": 1,
        "id": 5
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/the-celebrity-bootcut-pant-31-27355b2caefd272e3916216337790595-1024-1024.jpg",
        "name": "THE LUXURY PANTS UNISEX",
        "category": "bottom",
        "info": "Pantalón de gabardina de algodón con print luxury grabado láser. Unisex.",
        "precio": 7700, 
        "cant": 1,
        "id": 6
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/img_53481-aff6f17b7a871f5e2416364056686343-1024-1024.jpg",
        "name": "BOOTCUT ROLLS ROYCE",
        "category": "bottom",
        "info": "Pantalón / Calza de tul, corte bootcut, cintura con elástico negro tejido con logo blanco. ",
        "precio": 8000,
        "cant": 1,
        "id": 7
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/img_56331-f2c40e8c53cbb19cd616344823096115-1024-1024.jpg",
        "name": "BANDANA ROCKY",
        "category": "accesories",
        "info": "Bandana doble en forma de triángulo, sublimada con estampa ROCKY. Múltiples usos. Sin Talle.",
        "precio": 6900,
        "cant": 1,
        "id": 8
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/cap-celebrity-31-858db8dea3874eeff716597164357578-1024-1024.jpg",
        "name": "THE CELEBRITY CAP",
        "category": "accesories",
        "info": "Cap de tracker impermeable, estampada en celebrity",
        "precio": 5800,
        "cant": 1,
        "id": 9
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/842/284/products/woldwide-choker-31-6c9f23c99fb1180ac716650744819040-1024-1024.jpeg",
        "name": "WORLDWIDE CHOKER",
        "category": "accesories",
        "info": "Choker realizado en cadena de acero con baño de niquel, logo worldwide en centro.",
        "precio": 6900,
        "cant": 1,
        "id": 10
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