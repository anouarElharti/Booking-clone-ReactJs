import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from "./pages/home/home";
import Hotel from "./pages/hotel/hotel";
import Listing from "./pages/list/list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<Listing/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
