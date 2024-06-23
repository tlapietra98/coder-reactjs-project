import { useState } from "react"
import { CartContext } from "./CartContext"

function CartProvider ({children}) {
    
    const [items, setItems] = useState([])


    const isInCart = (itemID) => {
        return items.find(item => item.id == itemID)
    }

    const addCartItem = (item) => {
        
        if(isInCart(item.id)){
            const cartItem = isInCart(item.id)
            cartItem.quantity += item.quantity
            return
        }
        
        setItems([ ... items, item])
    }

    const removeCartItem = (itemID) => {
        setItems(items.filter(item=>item.id != itemID))
    }

    const clearCart = () => setItems([])

    return(
        <CartContext.Provider value = {{ items, addCartItem, removeCartItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider