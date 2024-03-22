import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Layout/WelcomePage";
import Home from "./Components/Home";


function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path="/home" element={<Home />} />


      

        <Route path="*" element="" />
      </Routes >
    </>
  );
}

export default App;
