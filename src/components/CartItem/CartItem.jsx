import { Button } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartItem({ cItem }){
    
    const { removeCartItem } = useContext(CartContext)

    const deleteItem = () => removeCartItem(cItem.id)

    return (
        <div>
            <h3>{cItem.name}</h3>
            <img style={{"maxWidth": "150px","maxHeight": "150px"}} src={cItem.image} alt={cItem.description}/>
            <p>Unit price: {cItem.price}</p>
            <p>Quantity: {cItem.quantity}</p>
            <p>Price: {(cItem.price * cItem.quantity)}</p>
            <Button onClick={deleteItem}>X</Button>
        </div>

    )
}

export default CartItem