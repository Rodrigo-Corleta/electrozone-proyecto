import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import products from "../../products.json"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[productsList, setProductsList] = useState(null)
    const {Itemid} = useParams()

    useEffect(() => {
        const getItemById =() => {
            return new  Promise((resolve) => {
                setTimeout(() => {
                    resolve(products.find(product => product.id === Itemid))
                }, 2000)
            })
        }
        getItemById(Itemid)
        .then(product => setProductsList(product))
        .catch(error => console.log(error))
    },[Itemid]
    )

    return (
        <div>
            {productsList ? <ItemDetail {...productsList}/> : <p>Cargando...</p>}
        </div>
    );

}
export default ItemDetailContainer