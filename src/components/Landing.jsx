import './Landing.css';
import  LandingImage from './landing-illustration.jpg';
const Landing = () => (
  <section className="landing">
    <div className="landing-text">
      <h1>CleanTrack</h1>
      <p className="subtitle">
        Report garbage issues. Track civic cleanup. Be part of the solution.
      </p>
      <a href="#report" className="cta-button">Sign in</a>
    </div>
    <div className="landing-img">
      <img src={LandingImage} alt="City Cleanup" />
    </div>
  </section>
);

export default Landing;