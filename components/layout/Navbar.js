"use client";
import { useEffect, useState, useRef } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
const links = ["About", "Projects", "Skills", "Experience"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef(null);
  useEffect(() => {
    const update = () => {
      let current = "home";
      for (const id of [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "contact",
      ]) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 180) current = id;
      }
      setActive(current);
    };
    const escape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="site-nav glass" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Yugin Santhosh home"
        >
          ys<span>.</span>
          <span className="brand-label">YUGIN SANTHOSH</span>
        </a>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              aria-current={
                active === label.toLowerCase() ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <FiArrowUpRight />
          </a>
        </div>
        <button
          className="menu-toggle"
          ref={toggle}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation-links"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </>
  );
}
