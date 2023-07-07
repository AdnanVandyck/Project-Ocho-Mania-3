import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Bio from "./pages/Bio";
import Music from "./pages/Music";
import Performances from "./pages/Performances";
import Clients from "./pages/Clients";
import Connect from "./pages/Connect";
// import Home from "./pages/Home";
import BackgroundImage from "./components/backgroundImage";







function App() {
return (
<div className="App"> 
<BrowserRouter>
<div className="navBar container-fluid">  
  <Navbar /> 
   <main>
<div className="container-fluid">

  <div className="display">
<Routes>
<Route path="/" element={<BackgroundImage />} />
<Route path="/bio" element={<Bio />} />
<Route path="/music" element={<Music />} />
<Route path="/performances" element={<Performances />} />
<Route path="/clients" element={<Clients />} />
<Route path="/connect" element={<Connect />} />
</Routes>
  </div>
</div>  
</main>
  </div>
</BrowserRouter>

</div>

);
}

export default App;
