import React from "react";
import { Router, Route } from "react-router";
import HomeIndex from "./HomeIndex";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <HomeIndex />
      </div>
      <Route exact path='/login' component={Login}></Route>
    </Router>
  );
}

export default App;
