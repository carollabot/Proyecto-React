import { useState, useEffect } from "react";
import { getProductById  } from "../../asyncMock";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState ()
    const [loading, setLoading] = useState (true)
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer