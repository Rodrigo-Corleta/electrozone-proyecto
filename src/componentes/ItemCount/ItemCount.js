import { useState } from "react"

const ItemCount = ({stock, initial, onAdd})=> {
    const [amount, setAmount]= useState(initial)

    const increment =() =>{
        if (amount < stock){
            setAmount (amount+1)
        }
    }

    const decrement =() =>{
        if (amount > 1){
            setAmount (amount - 1)
        }
    }

    return(
        <div className= "flex flex-col items-center justify-center">
            <div className="flex items-center mt-4">
                <button onClick={decrement} className="px-2 py-1 rounded-md bg-blue-800 hover:bg-blue-700 text-white mr-2 text-sm leading-none">-</button>
                <span className="text-xl">{amount}</span>
                <button onClick={increment} className="px-2 py-1 rounded-md bg-blue-800 hover:bg-blue-700 text-white ml-2 text-sm leading-none">+</button>
            </div>
            <div>
                <button onClick={()=> onAdd (amount)} disabled={stock <= 0} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-full mt-4 flex items-center justify-center leading-none">
                Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount
