import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import "./styles/App.css";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
