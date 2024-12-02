import { Links } from "../data/Links";
import "../styles/Footer.css";

export default function ServicesList() {
  return (
    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        {Links.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

    </div>
  )
}
