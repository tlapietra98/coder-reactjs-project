import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

function Cart (){

    const { items } = useContext(CartContext)

    console.log(items)

    if (items.length){
        return (
            <div>
                {items.map(item => <CartItem key={item.id} cItem={item} />)}
            </div>
        )
    }

    return(
        <div>Your cart is empty!</div>
    )
}

export default Cart