import "../styles/Navbar.css";
import { Link } from "react-router-dom";
export default function divbarDefault() {
  return (
    <div className="Navbar">
      <p>Herbavore</p>
      <div>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
        <div>
          <Link to={`/store`}>Store</Link>
        </div>
        <div>About</div>
        <div>Cart</div>
      </div>
    </div>
  );
}
