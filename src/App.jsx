import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Welcome to Gamestuck!"} />
    </>
  )
}

export default App
