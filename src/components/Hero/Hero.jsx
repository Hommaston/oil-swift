import HeroImage from './HeroImage';
import Button from '../Button/Button';
import './Hero.css';
function Hero() {
  return (
    <section className="hero">
      <div className="hero_content">
        <div className="hero_badge">
          <span className="hero_badge_text">THE PROFESSIONAL NETWORK OF NIGERIA OIL & GAS</span>
        </div>
        <h1 className="hero_title">
            Your Career, <br /><span style={{color: 'var(--color-text-secondary)', fontWeight: 'var(--weight-black)'}}>VERIFIED.</span><br />
            Your Industry, <br /><span style={{color: 'var(--color-text-highlight)', fontWeight: 'var(--weight-black)'}}>CONNECTED.</span>
        </h1>
        <p className="hero_description">
          One professional passport fot the entire value chain. <br />
          Oil-Swift Professionals is where industry recruits, shortlists, mentors and engages verified talent — engineers, technicians, geoscientists, HSE experts, project professionals and the graduates coming up behind them. <br />
        </p>
        <div className="hero_buttons">
          <Button text="Create Passport" style={{ backgroundColor: "var(--color-bg-secondary)", borderRadius: "var(--radius-md)", color: "var(--color-text-tertiary)", fontSize: "var(--text-base)" }} />
          <Button text="I'm Hiring" style={{ backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)", color: "var(--color-text-secondary)", border: "2px solid var(--color-border-secondary)",fontSize: "var(--text-base)" }} />
        </div>
      </div>

      <div className="hero_image">
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;