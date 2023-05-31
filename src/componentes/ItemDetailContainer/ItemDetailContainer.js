import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/FireBaseConfig';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [productsList, setProductsList] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getItemById = async () => {
      try {
        const itemDocRef = doc(db, 'products', itemId);
        const itemDocSnap = await getDoc(itemDocRef);
        if (itemDocSnap.data()) {
          const data = itemDocSnap.data();
          setProductsList({
            id: itemId,
            ...data,
          });
        } else {
          console.log('No se encontro el producto');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getItemById();
  }, [itemId]);

  return <div className="mt-20">{productsList ? <ItemDetail {...productsList} /> : <p>Cargando...</p>}</div>;
};
export default ItemDetailContainer;

// useEffect(() => {
//     const getItemById =() => {
//         return new  Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(products.find(product => product.id === itemId))
//             }, 2000)
//         })
//     }
//     getItemById(itemId)
//     .then(product => setProductsList(product))
//     .catch(error => console.log(error))
// },[itemId]
// )
