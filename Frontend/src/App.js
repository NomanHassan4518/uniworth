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
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { emptyCartData } from "./Redux/Action/Action";


function App() {
  const location = useLocation();
  // const dispatch=useDispatch()
  // const data=useSelector((state)=>state.cartData)
  // console.log(data);

  // useEffect(()=>{
   
  // },[dispatch])
// let index=2
//   const handle=()=>{
//     dispatch(emptyCartData())
//   }
  

  return (
    <div className="">
      {/* <button className="mb-32" onClick={ handle}>Hassan</button> */}
      {location.pathname !== "/checkout" && <NotificationBar />}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:category" element={<Products />} />
        <Route path="/:category/:name" element={<ProductDetail />} />
        <Route path="/shoping-cart" element={<ProductCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
