import React, {useState} from "react"
import "./ItemCount.css"

const ItemCount = ({initial, stock}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count>initial){
            setCount(count-1)
        }
    }

    const increment = () => {
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
        <div className="countContainer">
            <button onClick={decrement}>-</button>
            <span className="countNumber">{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount