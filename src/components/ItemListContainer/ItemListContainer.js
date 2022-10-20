import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import { getProductsByCategory } from "../../asyncMock";


const ItemListContainer = ({greetings}) => {
    const [products, setPoducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState (true)

    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId) {
            getProducts().then(res => {
                setPoducts(res)
            }).catch(error => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            }) 
        } else {
            getProductsByCategory(categoryId).then(res => {
                setPoducts(res)
            }).catch(error => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            }) 
        }
    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    return (
        <div className="ItemListContainer">
            <h1 className="greetings">{greetings}</h1>
            <ItemList products={products}/>
        </div>
    )
   
}

export default ItemListContainer 