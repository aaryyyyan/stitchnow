import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIRecommendations from "./pages/AIRecommendations";
import PaymentGateway from "./pages/PaymentGateway";
import OrderTracking from "./pages/OrderTracking";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
export default function App() {

  return (
    <BrowserRouter>

  <Routes>

  <Route path="/" element={<Home />} />

  <Route path="/products" element={<Products />} />

  <Route path="/product" element={<ProductDetails />} />

  <Route path="/cart" element={<Cart />} />

  <Route path="/wishlist" element={<Wishlist />} />

  <Route path="/checkout" element={<Checkout />} />

  <Route path="/tracking" element={<OrderTracking />} />

  <Route path="/payment" element={<PaymentGateway />} />

  <Route path="/ai" element={<AIRecommendations />} />

  <Route path="/login" element={<Login />} />

  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/admin" element={<Admin />} />

</Routes>

    </BrowserRouter>
  );
}