import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to BRAguest</h1>
        <p className="hero-subtitle">The <em>Braggest</em> project of my portfolio</p>
        {/* <button className="hero-cta">Get Started</button> */}
        <Link to="/get-started" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </section>
  );
}