import { FaCartPlus as CartIcon} from "react-icons/fa"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import "./CartWidget.css"

const CartWidget = () => {
  
  const { cartItems } = useContext(CartContext)
  //const navigate = useNavigate()
  
  return ( 
    <div>
        <Link to='/cart' className="cartIconContainer">
          <CartIcon className="cartIcon" size={28}/>
          {cartItems.length > 0 && cartItems.length}
        </Link>
    </div>
  )
}

export default CartWidget