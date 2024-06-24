import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"

function CartProvider ({children}) {
    
    const [cartItems, setCartItems] = useState([])
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [totalCartQuantity, setTotalCartQuantity] = useState(0)

    useEffect(()=>{
        setTotalCartPrice(cartItems.reduce((acc,item)=> acc + item.price * item.quantity,0))
    },[cartItems])

    useEffect(()=>{
        setTotalCartQuantity(cartItems.reduce((acc,item)=> acc + item.quantity,0))
    },[cartItems])

    const isInCart = (itemID) => {
        return cartItems.find(item => item.id == itemID)
    }

    const addCartItem = (item) => {
        
        if(isInCart(item.id)){
            const cartItem = isInCart(item.id)
            cartItem.quantity += item.quantity
            return
        }
        
        setCartItems([ ... cartItems, item])
    }

    const removeCartItem = (itemID) => {
        setCartItems(cartItems.filter(item=>item.id != itemID))
    }

    const clearCart = () => setCartItems([])

    return(
        <CartContext.Provider value = {{ cartItems, totalCartPrice, totalCartQuantity, addCartItem, removeCartItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider