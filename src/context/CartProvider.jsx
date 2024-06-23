import { useState } from "react"
import { CartContext } from "./CartContext"

function CartProvider ({children}) {
    
    const [items, setItems] = useState([])

    const addToCart = (item) => {
        setItems([ ... items, item ])
    }

    const clearCart = () => setItems([])

    return(
        <CartContext.Provider value = {{ items, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider