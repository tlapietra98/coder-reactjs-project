import {useState, useEffect} from "react"
import Loader from "../Loader/Loader"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore"
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const { id } = useParams()

  useEffect(
    () => {

      const fetchData = async () => {
        try{

          //con firebase
          const db = getFirestore()

          if (id === undefined){
            console.log("ID is undefined")

            const docsRef = collection(db, "products")
            const querySnaphot = await getDocs(docsRef)
            //querySnaphot.forEach((doc)=>{console.log(doc.id, "=>", doc.data())})
            setProducts(querySnaphot.docs.map(doc => ({id:doc.id, ...doc.data()})))
          }
          else{
            console.log("ID is: ", id)

            const q = query(collection(db, "products"), where("category", "==", id))
            const querySnaphot = await getDocs(q)
            //querySnaphot.forEach((doc)=>{console.log(doc.id, "=>", doc.data())})
            setProducts(querySnaphot.docs.map(doc => ({id:doc.id, ...doc.data()})))
          }


          //con json
          /* const response = await fetch ("/data/products.json")
          const data = await response.json()
          
          id === undefined ?
            setProducts(data)
            :
            setProducts(data.filter(product => product.category == id)) */

        }
        catch(error){
          console.log("Error while obtaining products", error)
        }
      }
    
      fetchData()
    
    }, [id])

  return (
    <div className="contentContainer">
      
      <h3 className='contentTitle'>{greeting}</h3>

      {products.length == 0 ? 
        <Loader/> 
        :
        <ItemList products={products}/>
      }
        
    </div>
  )
}

export default ItemListContainer