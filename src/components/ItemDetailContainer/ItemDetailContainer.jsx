import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"
import { collection, getDocs, doc, query, where, getDoc, getFirestore } from "firebase/firestore"
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { id } = useParams() 

    const [productTest, setProductTest] = useState(null)

    useEffect(()=>{

        const fetchData = async () => {
            try{

                //con firebase
                const db = getFirestore()

                console.log("ID is: ", id)

                const docRef = doc(db, "products", id)
                const docSnapshot = await getDoc(docRef)
                setProductTest(({id:docSnapshot.id, ...docSnapshot.data()}))
                console.log(productTest)
                setProduct(({id:docSnapshot.id, ...docSnapshot.data()}))
            

                //con json
                /* const response = await fetch("/data/products.json")
                const data = await response.json()
                const product = data.find(product => product.id == id)
                setProduct(product) */
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
            {product ? <ItemDetail product={product}/> : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer