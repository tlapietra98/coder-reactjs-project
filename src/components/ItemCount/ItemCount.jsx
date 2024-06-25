import React, {useState, useContext} from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import "./ItemCount.css"

const ItemCount = ({initial, stock, item}) => {

    const [count, setCount] = useState(initial)
    const { addCartItem } = useContext(CartContext)
    const navigate = useNavigate()

    const decrement = () => {
        if (count > initial){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const addItem = () => {
        addCartItem({ ... item, quantity: count }) // paso product y al final le agrego quantity como otra propiedad
        navigate('/cart')
    }

    return(
        <div className="countContainer">
            <div>
                <button onClick={decrement}>-</button>
                <span className="countNumber">{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={addItem}>Add to cart</button>
        </div>
    )
}

export default ItemCount