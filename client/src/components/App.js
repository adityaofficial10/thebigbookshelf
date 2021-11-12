import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login.js";
import Profile from "./Profile";
import Signup from "./Signup";

import BuyerDashboard from "./BuyerDashboard";
import Cart from "./Cart";
import CompareDeals from "./CompareDeals";
import SellBook from "./SellBook";
import BookInfo from "./BookInfo";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<BuyerDashboard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="compare-deals" element={<CompareDeals />} />
        <Route path="sell-book" element={<SellBook />} />
        <Route path="book-info" element={<BookInfo />} />
      </Routes>
    </div>
  );
}


export default App;
