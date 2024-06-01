import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"


const ItemDetailContainer = ({itemID}) => {

    const [product, setProduct] = useState(null)

    const { id } = useParams() 

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("./data/products.json")
                const data = await response.json()
                const product = data.find(product => product.id == itemID)
                setProduct(product)
            }
            catch(error){
                console.log("Error while obtaining product", error)
            }
        }

        fetchData()

    }, [itemID])


    return (
        <div className="containerContainer">
            {product ? <ItemDetail product={product}/> : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer