import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import "./OrderContainer.css"


const OrderContainer = () => {
  
  const [orders, setOrders] = useState([])

  useEffect(
    () => {

      const fetchData = async () => {
        try{
          const db = getFirestore()
          const docsRef = collection(db, "orders")
          const querySnaphot = await getDocs(docsRef)
          setOrders(querySnaphot.docs.map(doc => ({id:doc.id, ...doc.data()})))
        }
        catch(error){
          console.log("Error while obtaining orders", error)
        }
      }
    
      fetchData()
    
    }, [])
  
  

  if (orders.length){
    return (
      <div className="orderContainerContainer">
        {orders.map(order => 
          <div key={order.id} className="order">
            <h3>Purchase order ID: {order.id}</h3>
            <p>Purchase order Total: ${order.total}</p>
            <p>Buyer: {order.buyer.name}</p>
            <p>Phone: {order.buyer.phone}</p>
            <p>Email: {order.buyer.email}</p>
          </div>)}
      </div>
    )
  }

  return(
    <div className="emptyOrdersMsg">You have no orders!</div>
  )
  
}

export default OrderContainer