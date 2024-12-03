import Button from "../components/Button";
import "../styles/Hero.scss";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">SUMMER COLLECTION</span>
        <h1 className="hero-title">
          Fall - Winter <br /> Collections 2030
        </h1>
        <p className="hero-description">
          A specialist label creating luxury essentials. Ethically crafted
          with an unwavering commitment to exceptional quality.
        </p>
      
        <Button className="hero-button">SHOP NOW</Button>
      </div>

    </section>
  );
};
