import { FaCartPlus } from "react-icons/fa"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./CartWidget.css"

const CartWidget = () => {
  
  const { items } = useContext(CartContext)
  
  return ( 
    <div>
        <Link to='/cart' className="cartIconContainer">
          <FaCartPlus/>
          {items.length}
        </Link>
    </div>
  )
}

export default CartWidget