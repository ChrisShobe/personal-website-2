import "../home.css";
import meImg from "/assets/images/home/me.jpg";
import projectImg from "/assets/images/home/projects.jpg";
import experienceImg from "/assets/images/home/experience.jpg";
import aboutImg from "/assets/images/home/about.jpg";
import Navigation from "../components/Navigation.js";

const Home = () => {
  return (
    <div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chris-shobe/" target="_blank" rel="noopener noreferrer">
          <i className = "fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/ChrisShobe" target="_blank" rel="noopener noreferrer">
          <i className = "fab fa-github"></i>
        </a>
        <a href="mailto:chrisshobe2000@gmail.com">
          <i className = "fas fa-envelope"></i>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <i className = "fas fa-file-alt"></i>
        </a>
      </div>
        
      <Navigation currentPage="home" />

      <div className="header">
        <div className="header-content">
          <img className="circle-image" src={meImg} alt="Me" />
          <div className="header-content-body">
            <h1>
              <span style={{ color: "#b340e0" }}>Welcome!</span>{" "}
              <span style={{ color: "#df8fff" }}>I'm</span>{" "}
              <span style={{ color: "#40E0D0" }}>Chris Shobe</span>
            </h1>
            <p>
              I'm a rising junior at Santa Clara University studying Computer Science and Engineering with a Marketing minor, passionate about building inclusive, impactful tech through software, cybersecurity, and full-stack development.
            </p>
          </div>
        </div>
      </div>

      <a href="/projects">
        <div className="link-box">
          <img src={projectImg} alt="Project Image" />
          <div className="centered">My Projects</div>
        </div>
      </a>

      <a href="/experience">
        <div className="link-box">
          <img src={experienceImg} alt="Experience Image" />
          <div className="centered">My Experience</div>
        </div>
      </a>

      <a href="/about">
        <div className="link-box">
          <img src={aboutImg} alt="About Image" />
          <div className="centered about-text">About Me Beyond CS</div>
        </div>
      </a>
    </div>
  );
};

export default Home;