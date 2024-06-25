import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Item.css"


const Item = ({product}) => {
  
  const navigate = useNavigate()
  
  return (
    <div className="itemCard">
        <h3>{product.name}</h3>
        <img style={{"maxWidth": "200px","maxHeight": "200px"}} src={product.image} alt={product.description}/>
        <span>{product.description}</span>
        <p>${product.price}</p>
        <button onClick={()=>navigate(`/item/${product.id}`)}>
          See more
          {/* <Link to={`/item/${product.id}`}>See more</Link> */}
        </button>
    </div>
  )
}

export default Item