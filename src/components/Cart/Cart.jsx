import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { collection , addDoc, getFirestore} from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import "./Cart.css"


function Cart (){

    const { cartItems, totalCartPrice, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    console.log(cartItems)


    const addPurchaseOrder = async () => {
        
        const order = {
            buyer:{
                name: "Fulano de Tal",
                phone: "1234567890",
                email: "fulanito98@hotmail.com"
            },
            items: cartItems,
            total: totalCartPrice
        }
        
        const db = getFirestore()
        const docRef = collection(db,"orders")
        await addDoc(docRef, order)
        clearCart()
        navigate('/orders')
    }

    if (cartItems.length){
        return (
            <div className="cartContainer">
                {cartItems.map(item => <CartItem key={item.id} cItem={item} />)}
                <p>Total: {totalCartPrice}</p>
                <button onClick={addPurchaseOrder}>Confirm purchase</button>
            </div>
        )
    }

    return(
        <div>Your cart is empty!</div>
    )
}

export default Cart