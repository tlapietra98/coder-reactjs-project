import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navContainer">
        <div>
          <Link to='/' className="logo"><h1>Gamestuck</h1></Link>
        </div>
        <div className="navLinks"> 
          <Link to='/'>Home</Link>
          <Link to='/category/consoles'>Consoles</Link>
          <Link to='/category/videogames'>Videogames</Link>
          <Link to='/orders'>Orders</Link>  
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar