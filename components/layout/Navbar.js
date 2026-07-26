'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-black/75 backdrop-blur-2xl border-b border-indigo-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 no-underline">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-[0.7rem] font-extrabold tracking-wide text-white font-heading shrink-0">
            YS
          </span>
          <span className="text-[1.05rem] font-bold font-heading"
            style={{ background: 'linear-gradient(135deg, #e2e8f0, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Yugin Santhosh
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-10"
        >
          <span className={`block w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 origin-center ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 origin-center ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
        </button>

        {/* Desktop nav menu */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link relative px-3 py-2 text-[0.9rem] font-medium transition-colors duration-300 no-underline ${isActive ? 'text-slate-200' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {label}
                  <span className={`nav-link-underline ${isActive ? 'active' : ''}`}></span>
                </Link>
              </li>
            )
          })}
          <li>
            <a
              href="#contact"
              className="ml-2 px-5 py-2 rounded-full text-[0.85rem] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(99,102,241,0.5)]"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 15px rgba(99,102,241,0.3)' }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile drawer */}
        <ul
          className={`md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-black/[0.97] backdrop-blur-2xl border-l border-indigo-500/20 flex flex-col items-start pt-20 pb-8 px-8 gap-1 list-none transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <li key={href} className="w-full">
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full py-3 text-[1.05rem] font-medium no-underline transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li className="mt-4 w-full">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold text-white no-underline"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
