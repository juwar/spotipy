import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Music from "./Music/Music";

// for (let index = 0; index < songs.length; index++) {
//   const song = songs[index];
//   song.id = index;
// }

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Music" element={<Music />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
};
export default App;
