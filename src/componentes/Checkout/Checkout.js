import React, { useContext, useState, useEffect } from 'react';
import { db } from '../../firebase/FireBaseConfig';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const [name] = useState('Lionel');
  const [email] = useState('Lionel10@gmail.com');
  const [phone] = useState('1234457');
  const [idCompra, setIdCompra] = useState('');
  const [orderCreated, setOrderCreated] = useState(false);

  const { cartList, totalPrice } = useContext(CartContext);

  useEffect(() => {
    if (!orderCreated) {
      const saveOrder = async () => {
        try {
          console.log('Guardando compra');
          let order = {
            buyer: { name, email, phone },
            items: cartList.map((item) => {
              return {
                id: item.id,
                name: item.name,
                price: item.price,
              };
            }),
            total: totalPrice(),
          };
          const miCollection = collection(db, 'orders');
          const docRef = await addDoc(miCollection, order);
          console.log('orden  guardada', docRef.id);
          setIdCompra(docRef.id);

          setOrderCreated(true);
        } catch (error) {
          console.log('Error al relizar la compra', error);
        }
      };
      console.log('ejecutando useEffect');
      saveOrder();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">¡Felicitaciones!</h1>
      <h2 className="text-xl font-semibold  mb-4">Su compra se ha realizado con éxito.</h2>
      <p className="text-lg">Su ID de compra es: {idCompra}</p>
    </div>
  );
};

export default Checkout;
