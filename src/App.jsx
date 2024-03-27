import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Layout/WelcomePage";
import Homeberber from "./Components/Homeberber";
import LoginModal from "./Components/LoginModal";
import RegisterModal from "./Components/RegisterModal";

function App() {
  return (
    <div className="font-quicksand">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/homeberber" element={<Homeberber />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />

        <Route path="*" element="" />
      </Routes>
    </div>
  );
}

export default App;
