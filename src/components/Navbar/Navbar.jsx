import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navContainer">
        <div>
            <h1>Gamestuck</h1>
        </div>
        <div>
            <ul className="navLinks">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar