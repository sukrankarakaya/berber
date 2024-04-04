import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Search from "../Components/Customer/Search";
import HomePageCard from "../Components/Customer/HomePageCard";
import AllBarber from "../Components/Customer/AllBarber";

const Dashboard = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-8 py-28 min-h-screen bg-light items-center">
        <Search />
        <div className="">
          <HomePageCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
