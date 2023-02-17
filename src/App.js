import NavbarDefault from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />} path="/"></Route>
      </Routes>
    </BrowserRouter>
    // <div>

    //   <NavbarDefault />
    //   <Hero />
    //   <Features />
    //   {/* <p>Home Page</p> */}
    // </div>
  );
}

export default App;
