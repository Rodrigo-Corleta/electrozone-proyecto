import { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, amount) => {
        const newItem = {
            ...item, amount
        }
        setCartList(prev => [...prev, newItem]);
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(product => product.id !== itemId)); 
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (itemId) => {
        return cartList.some(product => product.id === itemId)
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;