import NavbarDefault from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import "./styles/App.css";

function App() {
  return (
    <div>
      <NavbarDefault />
      <Hero />
      <Features />
      {/* <p>Home Page</p> */}
    </div>
  );
}

export default App;
