import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Screen from "@UIComponents/layout/Screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@screens/Landing";
import { UserRegistration } from "@screens/User/UserRegistration";
import { UserDashboard } from "@screens/User/UserDashboard";
import ROUTES from "@constants/ROUTES";
import { MakeBooking } from "@screens/User/MakeBooking";
import { UserBookings } from "@screens/User/UserBookings";
import { ContractorRegistration } from "@screens/Contractor/ContractorRegistration";
import { ContractorDashboard } from "@screens/Contractor/ContractorDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LandingScreen} element={<LandingPage />} />
        <Route path={ROUTES.UserRegistration} element={<UserRegistration />} />
        <Route path={ROUTES.UserRegistration} element={<UserRegistration />} />
        <Route path={ROUTES.UserDashboard} element={<UserDashboard />} />
        <Route path={ROUTES.ContractorDashboard} element={<ContractorDashboard />} />
        <Route path={ROUTES.MakeBooking} element={<MakeBooking />} />
        <Route
          path={ROUTES.ContractorRegistration}
          element={<ContractorRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
