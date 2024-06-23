import { useState } from "react"
import { CartContext } from "./CartContext"

function CartProvider ({children}) {
    
    const [items, setItems] = useState([])


    const isInCart = (itemID) => {
        return items.find(item => item.id == itemID)
    }

    const addCartItem = (item) => {
        setItems([ ... items, item]) //tengo que modificarlo para que agregue un objeto que contiene al item y la quantity
    }

    const removeCartItem = (itemID) => {}

    const clearCart = () => setItems([])

    return(
        <CartContext.Provider value = {{ items, addCartItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider