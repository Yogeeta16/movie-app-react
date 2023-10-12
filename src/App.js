import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetailsDialog from "./components/MovieDetailsDialog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailsDialog />} />
      </Routes>
    </Router>
  );
}

export default App;
