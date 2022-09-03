import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import FavPage from "./pages/FavPage";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Products/:productId" element={<ProductCard />} />
        <Route path="/home" element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route path="/favorite" element={<FavPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={5000} />
    </Router>
  );
};

export default App;
