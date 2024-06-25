import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({ product }) => {
  return (
    <div className="detailContainer">
        <h3>{product.name}</h3>
        <img style={{"width": "300px"}}  src={product.image} alt={product.description}/>
        <p>Category: {product.category}</p>
        <p>Description:</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>

        <div className="itemCountContainer"><ItemCount initial={1} stock={product.stock} item={product} /></div>
        

        {console.log(product)}

    </div>
  )
}

export default ItemDetail