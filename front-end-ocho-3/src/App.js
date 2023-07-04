import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Bio from "./pages/Bio";
import Music from "./pages/Music";
import Performances from "./pages/Performances";
import Clients from "./pages/Clients";
import Connect from "./pages/Connect";
import BackgroundImage from "./components/backgroundImage";






function App() {

return (
  <div className="container-fluid">  
  <Navbar /> 
  <BackgroundImage />
   <main>
<div className="container-fluid">
<Routes>
<Route path="/" />
<Route path="/bio" element={<Bio />} />
<Route path="/music" element={<Music />} />
<Route path="/performances" element={<Performances />} />
<Route path="/clients" element={<Clients />} />
<Route path="/connect" element={<Connect />} />
</Routes>
  </div>  
</main>

  </div>
);
}

export default App;
