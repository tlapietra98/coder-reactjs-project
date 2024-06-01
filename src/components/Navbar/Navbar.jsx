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
                  Home
                </li>
                <li>
                  Consoles
                </li>
                <li>
                  Videogames
                </li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar