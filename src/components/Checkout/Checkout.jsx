import React, {useState} from 'react'
import "./Checkout.css"

const Checkout = ({confirmOrder}) => {

    const [buyerName, setBuyerName] = useState("")
    const [buyerPhone, setBuyerPhone] = useState("")
    const [buyerEmail, setBuyerEmail] = useState("")

    const handleConfirmOrder = async (e) => {
        e.preventDefault() //previene que se recargue la pagina
        const buyer = {
            name:buyerName,
            phone:buyerPhone,
            email:buyerEmail
        }

        await confirmOrder(buyer)
    }

  return (
    <form className="checkoutForm" onSubmit={(e)=>handleConfirmOrder(e)}>
        <input type="text" value={buyerName} onChange={(e)=>setBuyerName(e.target.value)} placeholder='Write your name and last name' required/>
        <input type="number" value={buyerPhone} onChange={(e)=>setBuyerPhone(e.target.value)} placeholder='Write your phone number' required/>
        <input type="email" value={buyerEmail} onChange={(e)=>setBuyerEmail(e.target.value)} placeholder='Write your email address' required/>
        <button type='submit'>Confirm Purchase</button>
    </form>
  )
}

export default Checkout