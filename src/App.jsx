import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Layout/WelcomePage"
import HomeBarber from "./Components/Barber/HomeBarber";
import Home from "./Components/Customer/Home";
import LoginModal from "./Components/Login/LoginModal"
import RegisterModal from "./Components/Register/RegisterModal"


function App() {
  return (
    <div className="font-quicksand">
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/homeberber" element={<HomeBarber />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />

        <Route path="*" element="" />
      </Routes>
    </div>
  );
}

export default App;
