import React from "react"
import Item from "../Item/Item"


const ItemList = ({products}) => {
    return (
        products.map((product) => (
                <div style={{"display":"flex","justifyContent":"center"}} key={product.id}>
                    <Item product={product}/>

                </div>
            )
        )
    )
}

export default ItemList