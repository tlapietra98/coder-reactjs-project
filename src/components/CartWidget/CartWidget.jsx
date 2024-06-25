import { FaCartPlus as CartIcon} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import "./CartWidget.css"

const CartWidget = () => {
  
  const { cartItems, totalCartQuantity } = useContext(CartContext)
  //const navigate = useNavigate()
  
  return ( 
    <div>
        <Link to='/cart' className="cartIconContainer">
          {/* <CartIcon className="cartIcon" size={28}/> */}
          <FontAwesomeIcon className="cartIcon" icon="fa-solid fa-cart-shopping" />
          <span className="cartIconCounter">{cartItems.length > 0 && totalCartQuantity}</span>
        </Link>
    </div>
  )
}

export default CartWidget