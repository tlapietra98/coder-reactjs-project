import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { id } = useParams() 

    useEffect(()=>{

        const fetchData = async () => {
            try{
                const response = await fetch("/data/products.json")
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
        <div className="containerContainer">
            {/* <>{id}</> */}
            {product ? <ItemDetail product={product}/> : <p>error en item detail container</p>}
        </div>
    )
}

export default ItemDetailContainer