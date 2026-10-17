import { experiences, personalInfo } from "@/lib/data";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
export default function Experience() {
  return (
    <section id="experience" className="section-shell content-section">
      <SectionHeading
        number="04"
        label="EDUCATION & EXPERIENCE"
        title="A foundation for what’s next."
      />
      <div className="glass experience-list">
        {experiences.map((item, index) => (
          <article key={item.title} className="experience-row">
            <div className="experience-date">
              <span className="card-kicker">
                0{index + 1} /{" "}
                {item.type === "education" ? "EDUCATION" : "CERTIFICATIONS"}
              </span>
              <p>{item.date}</p>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="experience-company">{item.company}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <a
        className="text-link experience-resume"
        href={personalInfo.resumeUrl}
        download
      >
        View my full résumé <FiArrowUpRight />
      </a>
    </section>
  );
}
