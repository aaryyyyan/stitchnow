import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  <Route path="/login" element={<Login />} />

  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/admin" element={<Admin />} />

</Routes>

    </BrowserRouter>
  );
}