import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"


const Item = ({product}) => {
  return (
    <div className="itemContainer">
        <h3>{product.name}</h3>
        <img style={{"maxWidth": "200px","maxHeight": "200px"}} src={product.image} alt={product.description}/>
        <p>${product.price}</p>
        <button>
          <Link to={`/item/${product.id}`}>See more</Link>
        </button>
    </div>
  )
}

export default Item