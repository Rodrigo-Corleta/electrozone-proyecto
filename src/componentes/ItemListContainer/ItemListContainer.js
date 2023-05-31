import ItemList from '../Itemlist/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/FireBaseConfig';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const itemCollection = collection(db, 'products');
        const filter = categoryId ? query(itemCollection, where('category', '==', categoryId)) : itemCollection;
        const result = await getDocs(filter);
        const newProductsList = result.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductsList(newProductsList);
      } catch (error) {
        console.log('No se pudieron cargar los productos');
      }
    };
    getProducts();
  }, [categoryId]);

  return (
    <div className="mt-20">
      <h1>{greeting}</h1>
      {productsList ? <ItemList productsList={productsList} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemListContainer;
