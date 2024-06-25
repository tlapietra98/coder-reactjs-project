import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navContainer">
        <div>
          <Link className="logo" to='/'>Gamestuck</Link>
        </div>
        <div className="navLinks"> 
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/category/consoles'>Consoles</Link>
          <Link className="link" to='/category/videogames'>Videogames</Link>
          <Link className="link" to='/orders'>Orders</Link>  
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar