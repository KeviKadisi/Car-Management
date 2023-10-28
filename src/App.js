import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Homepage from "./pages/Homepage";
import NoPage from "./pages/Nopage";
import Cars from "./pages/Cars";
import Car from "./pages/Car";
import Footer from "./components/ui/Footer";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="cars" element={<Cars />} />
            <Route path="/cars/:carId" component={<Car />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
