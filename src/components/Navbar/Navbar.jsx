import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navContainer">
        <div>
            <h1>Gamestuck</h1>
        </div>
        <div> 
            <ul className="navLinks">
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/category/consoles'>Consoles</Link>
                </li>
                <li>
                  <Link to='/category/videogames'>Videogames</Link>
                </li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar