import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import products from "../../products.json"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[productsList, setProductsList] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        const getItemById =() => {
            return new  Promise((resolve) => {
                setTimeout(() => {
                    resolve(products.find(product => product.id === itemId))
                }, 2000)
            })
        }
        getItemById(itemId)
        .then(product => setProductsList(product))
        .catch(error => console.log(error))
    },[itemId]
    )

    return (
        <div className="mt-20">
            {productsList ? <ItemDetail {...productsList}/> : <p>Cargando...</p>}
        </div>
    );

}
export default ItemDetailContainer