import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/itemList";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const [loading, setLoading] = useState (true)
    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    })

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h2>Detalle de Producto</h2>
            <div>{product?.name}</div>
            <ItemList products={product} />
        </div>
    )
}

export default ItemDetailContainer