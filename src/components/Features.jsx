import "../styles/Features.css";
import deliverypic from "../assets/homepage_pics/delivery.png";
import customersupport from "../assets/homepage_pics/customersupport.png";
import paper from "../assets/homepage_pics/paper.png";
import pill from "../assets/homepage_pics/pill.svg";
export default function Features() {
  return (
    <div className="Features">
      <div>
        <div>
          <img src={deliverypic} alt="delivery_icon" />
        </div>
        <div>Fast Delivery</div>
        <p>We are always on time with our delivery</p>
      </div>
      <div>
        <div>
          <img src={customersupport} alt="customersupport" />
        </div>
        <div>Customer Support</div>
        <p>
          We have a dedicated staff to help our customers find solutions to
          their problems
        </p>
      </div>
      <div>
        <div>
          <img src={paper} alt="Certification" />
        </div>
        <div>Certified Seller</div>
        <p>
          We have been a certified seller of supplements for over 3 years and
          have gained the ISO 994 certification
        </p>
      </div>
      <div>
        <div>
          <img src={pill} alt="pill" />
        </div>
        <div>High-Quality Pills</div>
        <p>
          We make sure that our supplements are brought from the highest quality
          manufacturers in the industry
        </p>
      </div>
    </div>
  );
}
