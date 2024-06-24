import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

function Cart (){

    const { cartItems, totalCartPrice } = useContext(CartContext)

    console.log(cartItems)

    if (cartItems.length){
        return (
            <div>
                {cartItems.map(item => <CartItem key={item.id} cItem={item} />)}
                <p>Total: {totalCartPrice}</p>
            </div>
        )
    }

    return(
        <div>Your cart is empty!</div>
    )
}

export default Cart