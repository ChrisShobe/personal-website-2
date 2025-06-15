import "../home.css";
import meImg from "/assets/images/me.jpg";
import projectImg from "/assets/images/project sunset.jpg";
import experienceImg from "/assets/images/experience sunset.jpg";
import aboutImg from "/assets/images/about sunset.jpg";

const Home = () => {
  return (
    <div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chris-shobe/" target="_blank" rel="noopener noreferrer">
          <i className = "fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ChrisShobe" target="_blank" rel="noopener noreferrer">
          <i className = "fab fa-github"></i>
        </a>
        <a href="mailto:chrisshobe2000@gmail.com">
          <i className = "fas fa-envelope"></i>
        </a>
      </div>
        
      <nav>
        <a href="/" className="current">Home</a>
        <a href="/projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/about">Beyond CS</a>
      </nav>

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
              <br />
              I'm a student at Santa Clara University with a passion for using technology to make a positive impact. 
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
          <div className="centered">About Me Beyond CS</div>
        </div>
      </a>
    </div>
  );
};

export default Home;