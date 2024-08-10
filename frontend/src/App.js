import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationBar from "./Components/NotificationBar";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NotificationBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
