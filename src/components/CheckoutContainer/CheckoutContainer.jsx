import React, {useContext} from 'react'
import { collection , addDoc, getFirestore} from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Checkout from '../Checkout/Checkout'
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