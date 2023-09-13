import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./views/Intro/IntroPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hola" element={<div>hola</div>} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
