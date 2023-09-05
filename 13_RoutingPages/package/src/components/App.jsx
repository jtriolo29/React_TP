import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./pages/Homepage";
import MensPage from "./pages/MensPage";
import SalePage from "./pages/SalePage";
import SeasonalCollection from "./pages/SeasonalCollection";
import WomensPage from "./pages/WomensPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<MensPage />} />
          <Route path="/seasonal" element={<SeasonalCollection />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/women" element={<WomensPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

//  Add <BrowserRouter> to the index.jsx or to the App.js
