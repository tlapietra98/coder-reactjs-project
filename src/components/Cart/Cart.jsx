import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Cart (){

    const { items } = useContext(CartContext)

    if (items.length > 0){
        return (
            <div>
                {items.map(item => <p key={item.id}>{item.name} quantity: {item.quantity}</p>)}
            </div>
        )
    }

    return(
        <div>Your cart is empty!</div>
    )
}

export default Cart