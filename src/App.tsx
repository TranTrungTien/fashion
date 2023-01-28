import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckoutCart from "./pages/checkout-page";
import HomePage from "./pages/home_page";
import ProductPage from "./pages/product-page";
import ShoppingCart from "./pages/shopping-cart-page";
import CategoryPage from "./pages/category-page";
import AppProvider from "./context";
function App() {
  // useScript();
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="body-wrapper text" style={{ margin: "auto" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:type" element={<CategoryPage />} />
            <Route path="/:type/:id" element={<ProductPage />} />
            <Route path="/carts" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutCart />} />
            {/* <Route path="/" element={<CartPage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
