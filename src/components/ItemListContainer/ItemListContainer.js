import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";


const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)


    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if(loading && true) {
        return <h1>Loading...</h1>
    }


    return (
        <div className="ItemListContainer">
            <h1>{`${greetings} ${categoryId || ''}`}</h1>
            <ItemList products={products} /> 
        </div>
    )
   
}

export default ItemListContainer