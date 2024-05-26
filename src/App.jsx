import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Welcome to Gamestuck!"} />
      <ItemDetailContainer id={1001}/>
      {/* <Footer/> */}
    </>
  )
}

export default App
