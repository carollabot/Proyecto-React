import { useState, useEffect, useContext } from "react";
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { NotificationContext } from '../../notification/Notification'
// import { getProducts, getProductsByCategory } from "../../asyncMock";


const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    // const [error, setError] = useState(false)
    const [loading, setLoading] = useState (true)
 
    const { categoryId } = useParams()
    const { setNotification } = useContext(NotificationContext)

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')
        
        getDocs(collectionRef).then(response => {

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })

           setProducts(productsAdapted)
        })
        .catch(error => {
            setNotification('error', 'No se pueden obtener los productos')
        })
        .finally(() => {
            setLoading(false)
        })


        /*
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
        */


    }, [categoryId])

    if(loading && true) {
        return <h1>Loading...</h1>
    }

    
    /*
    if(error) {
        return <h1>Hubo un error</h1>
    }
    */


    return (
        <div className="ItemListContainer">
            <h1>{`${greetings} ${categoryId || ''}`}</h1>
            {/* <h1 className="greetings">{greetings}</h1> */}
            <ItemList products={products} /> 
        </div>
    )
   
}

export default ItemListContainer 