import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  )
}

export default AppRouter