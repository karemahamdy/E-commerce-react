import "../styles/Footer.scss";
import footerLogo from "../assets/images/footer-logo.png.webp";

export default function FooterLogo () {
  return (
    <div className="footer-section logo-section">
      <img src={footerLogo} alt="footer-logo" loading="lazy" />
      <p>
        The customer is at the heart of our unique business model, which includes design.
      </p>

    </div>
  )
}
