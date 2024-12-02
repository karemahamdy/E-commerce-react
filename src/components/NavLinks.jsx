import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function NavLinks() {
  return (
    <>
      <ul className="footer-section">

      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <Link to="contact"
          smooth={true}
          duration={1}
          className="footer-section">
        product
        </Link>
      </li>
      <li>

        <Link to="exercises" className="footer-section">
          cart
        </Link>
      </li>
      
  
          </ul>
    </>
  )
}
