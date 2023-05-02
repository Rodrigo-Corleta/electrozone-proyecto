import ItemList from "../Itemlist/ItemList";
import { useState, useEffect } from 'react';
import products from '../../products.json';
import { useParams } from "react-router-dom";

const ItemListContainer =({greeting}) => {
    const [productsList,setProductsList] = useState()
    const {categoryId} = useParams()

    useEffect(() => {
        
        const getProducts =() =>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (products){
                        if (categoryId){
                            resolve(products.filter(product => product.category === categoryId))
                        }else{
                            resolve(products)
                        }
                        }else{
                            reject("Error.No se pudieron cargar los productos")
                        }
                }, 2000);
            })
        }
        getProducts(categoryId)
        .then((resultado) => {
            setProductsList (resultado)
        })
        .catch((error) => {
            console.log(error)        
        })   
    },[categoryId])

    return (
        <div className="mt-20">
            <h1>{greeting}</h1>
            {productsList ?<ItemList productsList={productsList}/> : <p>Cargando...</p>} 
        </div>
    );
}

export default ItemListContainer