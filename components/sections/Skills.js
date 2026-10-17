import { skillGroups, tools } from "@/lib/data";
import { FiCode, FiGlobe, FiTool } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
export default function Skills() {
  return (
    <section id="skills" className="section-shell content-section">
      <SectionHeading
        number="03"
        label="MY TOOLKIT"
        title="The tools behind the craft."
        description="A foundation in programming, paired with the technologies to build across the stack."
      />
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <article className="glass skill-card" key={group.category}>
            {i === 0 ? <FiCode /> : <FiGlobe />}
            <span className="card-kicker">0{i + 1} / EXPERTISE</span>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="small-dot" />
                  {item.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="glass tools-card">
        <h3>
          <FiTool /> Tools & specializations
        </h3>
        <div className="tags">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
