import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { collection , addDoc, getFirestore} from "firebase/firestore"

function Cart (){

    const { cartItems, totalCartPrice, clearCart } = useContext(CartContext)

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
    }

    if (cartItems.length){
        return (
            <div>
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