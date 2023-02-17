import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root.jsx";
import Index from "./components/Index";
import Error from "./components/Error";
import Store from "./components/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />} path="/" errorElement={<Error />}>
          <Route index={true} element={<Index />}></Route>
          <Route element={<Store />} path="/store"></Route>
        </Route>
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
