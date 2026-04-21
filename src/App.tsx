import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./store/CartContext";
import { CartNotice } from "./components/CartNotice";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <CartNotice />
      </BrowserRouter>
    </CartProvider>
  );
}

