import React from 'react'
import Checkout from '../Checkout/Checkout'
import { collection , addDoc, getFirestore} from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import "./CheckoutContainer.css"


const CheckoutContainer = () => {
    
    const { cartItems, totalCartPrice, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const confirmPurchaseOrder = async (buyer) => {
        
        const order = {
            buyer,
            items: cartItems,
            total: totalCartPrice
        }
        
        const db = getFirestore()
        const docRef = collection(db,"orders")
        await addDoc(docRef, order)
        clearCart()
        navigate('/orders')
    }
    
    return (
        <Checkout confirmOrder={confirmPurchaseOrder}/>
    )
}

export default CheckoutContainer