import { Outlet } from "react-router";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
