import { personalInfo } from "@/lib/data";
import { FiArrowUpRight, FiCode, FiLayers, FiCpu } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
export default function About() {
  return (
    <section id="about" className="section-shell content-section">
      <SectionHeading
        number="01"
        label="THE PERSON BEHIND THE WORK"
        title="Curiosity, with a purpose."
      />
      <div className="about-grid">
        <div className="glass about-story">
          <span className="card-kicker">A BUILDER AT HEART</span>
          <h3>
            From understanding a problem
            <br />
            to building a solution.
          </h3>
          <p>{personalInfo.bio}</p>
          <a className="text-link" href="#contact">
            Get to know me <FiArrowUpRight />
          </a>
        </div>
        <div className="about-stats">
          {personalInfo.stats.map((stat) => (
            <div className="glass stat-card" key={stat.label}>
              <strong>
                {String(stat.value).padStart(2, "0")}
                <span>+</span>
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="principles">
        {[
          {
            icon: FiCode,
            title: "Full stack development",
            text: "Responsive interfaces backed by clean application logic.",
          },
          {
            icon: FiLayers,
            title: "Thoughtful interfaces",
            text: "Clear layouts, considered details, and intuitive interactions.",
          },
          {
            icon: FiCpu,
            title: "Continuous exploration",
            text: "Connecting web technologies with AI and cloud services.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
