import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cartList, totalPrice, clear} = useContext(CartContext)
    
    if(cartList.length === 0) {
        return (
            <div>
                <h1>El carrito esta vacio</h1>
                <Link to="/">Ir al inicio</Link>
            </div>
        )
    }
    
    return (
        <div>
            {cartList.map(item =><CartItem key={item.id} product={item}/>)}
            <h2>Total: ${totalPrice}</h2>
            <button onClick={clear}>Borrar carrito</button>
            <Link to="/checkout">Checkout</Link>
        </div>
    )
}

export default Cart