import Image from "next/image";
import {
  FiArrowUpRight,
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { personalInfo } from "@/lib/data";
export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span /> Available for internships & projects
          </div>
          <p className="eyebrow hero-intro">
            FULL STACK DEVELOPER · IT STUDENT
          </p>
          <h1>
            Yugin
            <br />
            Santhosh <span>K.</span>
          </h1>
          <p className="hero-statement">
            Thoughtful code.
            <br />
            <span>Meaningful digital experiences.</span>
          </p>
          <p className="hero-description">
            I build modern web applications that connect considered interfaces
            with practical engineering. Based in Chennai, exploring the
            possibilities of web, AI, and cloud.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <FiArrowUpRight />
            </a>
            <a
              className="button button-glass"
              href={personalInfo.resumeUrl}
              download
            >
              <FiDownload /> Download résumé
            </a>
          </div>
          <div className="hero-socials">
            <span>Find me on</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <span className="social-divider" />
            <span>
              <FiMapPin /> Chennai, India
            </span>
          </div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-backplate glass" aria-hidden="true" />
          <div className="portrait-card glass">
            <div className="portrait-topline">
              <span className="small-dot" /> THE PERSON BEHIND THE CODE{" "}
              <span>01</span>
            </div>
            <div className="portrait-image">
              <Image
                src="/profile.jpg"
                alt="Yugin Santhosh K"
                fill
                priority
                sizes="(max-width: 760px) 85vw, 420px"
              />
            </div>
            <div className="portrait-caption">
              <div>
                <strong>{personalInfo.name}</strong>
                <span>Developer & lifelong learner</span>
              </div>
              <a href="#about" aria-label="Learn more about Yugin">
                <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="floating-note glass">
            <span className="code-symbol">&lt;/&gt;</span>
            <div>
              <strong>Ideas into interfaces.</strong>
              <span>React · Next.js · Python</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>ENGINEERED WITH PURPOSE. BUILT WITH CARE.</span>
        <a href="#about">
          Discover more <FiArrowDown />
        </a>
      </div>
    </section>
  );
}
