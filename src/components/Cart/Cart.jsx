import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Cart (){

    const { items } = useContext(CartContext)

    console.log(items)

    if (items.length){
        return (
            <div>
                {items.map(item => <li key={item.id}> {item.name} quantity: {item.quantity} </li>)}
            </div>
        )
    }

    return(
        <div>Your cart is empty!</div>
    )
}

export default Cart