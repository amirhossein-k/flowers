
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import SingleCategory from "./pages/singleCategory/SingleCategory";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/productId" element={<SingleProduct/>}/>
      <Route path="/product-category/productId" element={<SingleCategory/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='*' element={ <p>404</p>} />
    </Routes>
  );
}

export default App;
