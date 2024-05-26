import {useState, useEffect} from "react"
import Loader from "../Loader/Loader"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  useEffect(
    () => {

      const fetchData = async () => {
        try{
          const response = await fetch ("./data/products.json")
          const data = await response.json()
          setProducts(data)
        }
        catch(error){
          console.log("Error while obtaining products", error)
        }
      }
    
    fetchData()
    
    }, 
    [])

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