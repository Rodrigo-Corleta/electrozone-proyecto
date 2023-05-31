import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = (item) => {
    const {removeItem} =useContext (CartContext)

    const {img,name,price,id,amount}= item
    
    return (
        <div className='flex items-center mb-4'>
            <img src={img} alt={name} className='w-20 h-20 rounded mr-4'/>
            <div>
                <p className='text-xl font-semibold'>{name}</p>
                <p className='text-gray-500'>Cantidad:{amount}</p>
                <p className='text-gray-500'>Precio unitario: ${price}</p>
                <p className='text-gray-500'>Precio total: ${price * amount}</p>
                <button onClick={()=>removeItem(id)} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2'>Eliminar</button>
            </div>
        </div> 
    )     
}

export default CartItem