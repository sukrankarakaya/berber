import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Layout/WelcomePage"
import HomeBarber from "./Components/Barber/HomeBarber";
import Home from "./Components/Customer/Home";
import LoginModal from "./Components/Login/LoginModal"
import RegisterModal from "./Components/Register/RegisterModal"
import AllBarber from "./Components/Customer/AllBarber";
import BarberDetails from "./Components/Customer/BarberDetails";
import CustomerAppointments from "./Components/Customer/CustomerAppointments";
import ProfileCustomer from "./Components/Customer/ProfileCustomer";
import Dashboard from "./Layout/Dashboard";
import HomePageCard from "./Components/Customer/HomePageCard";


function App() {
  return (
    <div className="font-quicksand">
      
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/homeberber" element={<HomeBarber />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
        <Route path="/" element={<Home />} />
        <Route  element={<Dashboard/>}>
        <Route path="/home" element={<HomePageCard />} />

        <Route path="/home/all" element={<AllBarber/>} />
        <Route path="/home/all/:id" element={<BarberDetails/>} />
        <Route path="/home/:id" element={<BarberDetails/>} />
        <Route path="/myappointment" element={<CustomerAppointments/>}/>
        <Route path="/profile" element={<ProfileCustomer/>}/>


        </Route>

        {/* <Route path="/home/all" element={<AllBarber/>} />
        <Route path="/home/all/:id" element={<BarberDetails/>} />
        <Route path="/home/:id" element={<BarberDetails/>} />
        <Route path="/myappointment" element={<CustomerAppointments/>}/>
        <Route path="/profile" element={<ProfileCustomer/>}/> */}
        <Route path="*" element="" />
      </Routes>
    </div>
  );
}

export default App;
