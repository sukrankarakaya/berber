import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Layout/WelcomePage";
import Home from "./Components/Home";
import LoginModal from "./Components/LoginModal";
import RegisterModal from "./Components/RegisterModal";

function App() {
  return (
    <div className="font-quicksand">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />

        <Route path="*" element="" />
      </Routes>
    </div>
  );
}

export default App;
