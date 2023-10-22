import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Homepage from "./pages/Homepage";
import NoPage from "./pages/Nopage";
import Cars from "./pages/Cars";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="cars" element={<Cars />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>Footer</div>
    </>
  );
}

export default App;
