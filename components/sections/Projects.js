"use client";
import { useState } from "react";
import {
  FiArrowUpRight,
  FiBox,
  FiHeadphones,
  FiGrid,
  FiTrendingUp,
} from "react-icons/fi";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
const filters = [
  ["all", "All work"],
  ["web", "Web applications"],
  ["ai", "AI & cloud"],
  ["game", "Game development"],
  ["systems", "Systems & databases"],
  ["research", "Coursework"],
];
const categories = {
  web: {
    icon: FiGrid,
    label: "WEB DEVELOPMENT",
    art: "WEB / BUILD",
    caption: "DESIGNED FOR EVERYDAY LIFE",
  },
  ai: {
    icon: FiHeadphones,
    label: "AI & CLOUD",
    art: "CLOUD / CONNECT",
    caption: "CONNECTED EXPERIENCES",
  },
  game: {
    icon: FiBox,
    label: "GAME DEVELOPMENT",
    art: "PLAY / EXPLORE",
    caption: "INTERACTIVE POSSIBILITIES",
  },
  systems: {
    icon: FiTrendingUp,
    label: "SYSTEMS & DATABASES",
    art: "SYSTEMS / ENGINEER",
    caption: "STRUCTURED TO SOLVE",
  },
  research: {
    icon: FiGrid,
    label: "COURSEWORK",
    art: "EXPLORE / LEARN",
    caption: "LEARNING THROUGH PRACTICE",
  },
};
export default function Projects() {
  const [filter, setFilter] = useState("all");
  return (
    <section id="projects" className="section-shell content-section">
      <SectionHeading
        number="02"
        label="PROJECTS & EXPLORATIONS"
        title="Ideas brought to life."
        description="Projects and coursework across web development, cloud services, interactive systems, and software engineering."
      />
      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map(([id, label]) => (
          <button
            key={id}
            className={filter === id ? "selected" : ""}
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
          >
            {label}
            {id === "all" && (
              <span>{String(projects.length).padStart(2, "0")}</span>
            )}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {projects.map((project, index) => {
          if (filter !== "all" && project.category !== filter) return null;
          const category = categories[project.category] || categories.web;
          const Icon = category.icon;
          return (
            <article
              className="glass project-card"
              key={project.id || project.title}
            >
              <div
                className={`project-art art-${index % 4}`}
                aria-hidden="true"
              >
                <span className="project-art-label">
                  {project.artLabel || category.art}
                </span>
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="art-ring" />
                <div className="art-tile">
                  <Icon />
                </div>
                <div className="art-caption">
                  {category.caption}
                  <span>↗</span>
                </div>
              </div>
              <div className="project-body">
                <p className="card-kicker">{category.label}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.details?.length > 0 && (
                  <details className="project-details">
                    <summary>
                      Project details
                      <span className="sr-only"> for {project.title}</span>
                    </summary>
                    <ul>
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.id ? "View repository" : "GitHub profile"}{" "}
                    <FiArrowUpRight />
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live project <FiArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
