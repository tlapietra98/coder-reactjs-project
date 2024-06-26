import React, {useContext} from 'react'
import { collection, getDoc, addDoc, getFirestore, updateDoc, doc} from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Checkout from '../Checkout/Checkout'
import "./CheckoutContainer.css"


const CheckoutContainer = () => {
    
    const { cartItems, totalCartPrice, clearCart } = useContext(CartContext)
    const navigate = useNavigate()


    const getProductByID = async (id) => {
        try{

            //con firebase
            const db = getFirestore()
            const docRef = doc(db, "products", id)
            const docSnapshot = await getDoc(docRef)

            if(docSnapshot.exists()){
                return {id: docSnapshot.id, ...docSnapshot.data()}
            }
            else{
                throw new Error("Product not found")
            }
        }
        catch(error){
            console.log("Error while obtaining product", error)
        }
    }

    const confirmPurchaseOrder = async (buyer) => {
        
        const order = {
            buyer,
            items: cartItems,
            total: totalCartPrice,
            date: new Date().toDateString()
        }
        
        const db = getFirestore()
        const docRef = collection(db,"orders")
        await addDoc(docRef, order)
        
        cartItems.map(async item => {
            const product = await getProductByID(item.id)
            const docRef = doc(db,"products",item.id)
            await updateDoc(docRef,{stock:product.stock - item.quantity})
        })
        
        clearCart()
        navigate('/orders')
    }
    
    return (
        <Checkout confirmOrder={confirmPurchaseOrder}/>
    )
}

export default CheckoutContainer