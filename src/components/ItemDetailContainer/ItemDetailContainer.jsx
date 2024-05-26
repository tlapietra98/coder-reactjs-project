import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Item from "../Item/Item"
import Loader from "../Loader/Loader"

const ItemDetailContainer = ({id}) => {

    const [product, setProduct] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("./data/products.json")
                const data = await response.json()
                const product = data.find(product => product.id == id)
                setProduct(product)
            }
            catch(error){
                console.log("Error while obtaining product", error)
            }
        }

        fetchData()

    }, [id])


    return (
        <div>
            {product ? <ItemDetail product={product}/> : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer