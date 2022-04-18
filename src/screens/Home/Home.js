import React, { useState } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import Page from "./Page";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <React.Fragment>
        <NavBar handleShow={() => handleShow()} />
        <Page handleClose={() => handleClose()} show={showModal} />
    </React.Fragment>
  );
};
export default App;
