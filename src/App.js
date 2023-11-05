import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import Navbar from "./components/layouts/Navbar";
import Homepage from "./pages/Homepage";
import NoPage from "./pages/Nopage";
import Cars from "./pages/Cars";
import Car from "./pages/Car";
import Footer from "./components/ui/Footer";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="cars" element={<Cars />} />
              <Route path="cars/:carId" element={<Car />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
