import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Cart from "../components/Cart/Cart"
import OrderContainer from "../components/OrderContainer/OrderContainer"
import CheckoutContainer from "../components/CheckoutContainer/CheckoutContainer"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  )
}

export default AppRouter