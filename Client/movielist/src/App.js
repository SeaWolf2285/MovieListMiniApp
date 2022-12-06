import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

export const Context = React.createContext();



function App() {
const [movie, setMovie] = useState();
const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setMovie(data))
  },[]);

  return (
    <div className="App">
      <Context.Provider
        value={{
          movie, 
          setMovie, 
          searchInput, 
          setSearchInput
          }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;