import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Welcome to Gamestuck!"} />
      {/* <Footer/> */}
    </>
  )
}

export default App
