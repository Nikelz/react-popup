import React from "react";
import Popup from "./components/Popup.js";
import LogIn from "./components/Login-popup.js";
import Cabinet from "./components/Cabinet-popup.js";
import Logout from "./components/Logout-popup.js";
import { useState } from "react";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupLogin, setPopupLogin] = useState(false);
  const [popupCabinet, setPopupCabinet] = useState(false);
  const [popupLogout, setPopupLogout] = useState(false);

  return (
    <div className="App" >
      <main>
        <h1>Popups</h1>
        <button className="Login-btn" onClick={() => setPopupOpen(true)} >Popup</button>
        <button className="Login-btn" onClick={() => setPopupLogin(true)} >Login</button>
        <button className="Cabinet-btn" onClick={() => setPopupCabinet(true)} >Cabinet</button>
        <button className="Logout-btn" onClick={() => setPopupLogout(true)} >Logout</button>
        <Popup trigger={popupOpen} setTrigger={setPopupOpen}>
          <h1>Popup</h1>
        </Popup>

        <Popup trigger={popupLogin} setTrigger={setPopupLogin}>
          <LogIn />
        </Popup>

        <Popup trigger={popupCabinet} setTrigger={setPopupCabinet}>
          <Cabinet />
        </Popup>

        <Popup trigger={popupLogout} setTrigger={setPopupLogout}>
          <Logout />
        </Popup>
      </main>
    </div >
  );
}

export default App;
