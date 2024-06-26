import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { useNavigate } from "react-router-dom"
import "./Cart.css"


function Cart (){

    const { cartItems, totalCartPrice } = useContext(CartContext)
    const navigate = useNavigate()

    console.log(cartItems)

    if (cartItems.length){
        return (
            <div className="cartContainer">
                <div className="cartItemsContainer">
                    {cartItems.map(item => <CartItem key={item.id} cItem={item} />)}
                </div>
                <div className="confirmContainer">
                    <p>Total: ${totalCartPrice}</p>
                    <button onClick={()=>navigate('/checkout')}>Go to Checkout</button>
                </div>
            </div>
        )
    }

    return(
        <div className="emptyCartMsg">Your cart is empty!</div>
    )
}

export default Cart