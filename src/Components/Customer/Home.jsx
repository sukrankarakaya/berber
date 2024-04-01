import React from "react"; // Sadece bir kere import edilmeli
import Navbar from "../Navbar";
import Footer from "../Footer";
import Dashboard from "../../Layout/Dashboard";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Dashboard/>
      <Footer />
    </div>
  );
};

export default Home;
