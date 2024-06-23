import React, {useState, useContext} from "react"
import { CartContext } from "../../context/CartContext"
import "./ItemCount.css"

const ItemCount = ({initial, stock, product}) => {

    const [count, setCount] = useState(initial)
    const { addToCart } = useContext(CartContext)

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

    const addProduct = () => addToCart({ ... product, quantity: count })

    return(
        <div className="countContainer">
            <button onClick={decrement}>-</button>
            <span className="countNumber">{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={addProduct}>Add to cart</button>
        </div>
    )
}

export default ItemCount