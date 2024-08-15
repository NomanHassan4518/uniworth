import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NotificationBar from "./Components/NotificationBar";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Products from "./Pages/Products/Products";
import ProductDetail from "./Pages/Products/ProductDetail";
import ScrollToTop from "./Components/ScrollToTop";
import ProductCart from "./Pages/Products/ProductCart";
import Checkout from "./Pages/Checkout";

function App() {
  const location=useLocation();
  console.log(location);
  

  return (
    <div className="">
      {location.pathname!=="/checkout" &&   <NotificationBar />} 
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:category" element={<Products />} />
          <Route path="/:category/:name" element={<ProductDetail />} />
          <Route path="/shoping-cart" element={<ProductCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
