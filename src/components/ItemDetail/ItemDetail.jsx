import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
  return (
    <div>
        <h3>{product.name}</h3>
        <img style={{"width": "100px"}}  src={product.image} alt={product.description}/>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>

        <ItemCount initial={1} stock={product.stock} />

        <button>Add to cart</button>
    </div>
  )
}

export default ItemDetail