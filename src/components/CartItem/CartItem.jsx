import { Button } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartItem({ cItem }){
    
    const { removeCartItem } = useContext(CartContext)

    const deleteItem = () => removeCartItem(cItem.id)

    return (
        <>
            <p>{cItem.name} quantity: {cItem.quantity}</p>
            <Button onClick={deleteItem}>X</Button>
        </>

    )
}

export default CartItem