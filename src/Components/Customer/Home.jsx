import React from "react"; // Sadece bir kere import edilmeli
import Navbar from "../Navbar";
import Footer from "../Footer";
import Dashboard from "../../Layout/Dashboard";
import NavbarCustomer from "./NavbarCustomer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <NavbarCustomer />
      <Dashboard/>
      <Footer />
    </div>
  );
};

export default Home;
