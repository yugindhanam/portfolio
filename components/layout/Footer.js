import { personalInfo } from "@/lib/data";
import { FiArrowUpRight } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand" href="#home" aria-label="Yugin Santhosh home">
        ys<span>.</span>
      </a>
      <p>
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
      <div>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          GitHub <FiArrowUpRight />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <FiArrowUpRight />
        </a>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
