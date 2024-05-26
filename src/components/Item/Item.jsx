import React from 'react'

const Item = ({product}) => {
  return (
    <div>
        <h3>{product.name}</h3>
        <img style={{"width": "100px"}}  src={product.image} alt={product.description}/>
        <p>${product.price}</p>
    </div>
  )
}

export default Item