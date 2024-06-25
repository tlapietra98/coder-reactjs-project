import React from "react"
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        products.map((product) => (
                <div className="itemCardContainer" key={product.id}>
                    <Item product={product}/>
                </div>
            )
        )
    )
}

export default ItemList