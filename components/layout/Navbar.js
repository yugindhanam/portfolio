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
          ? 'py-3.5 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">

        {/* Logo Monogram */}
        <Link href="#home" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading text-xs font-black tracking-widest text-white">
              YSK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold font-heading text-slate-100 group-hover:text-indigo-400 transition-colors">
              Yugin Santhosh K
            </span>
            <span className="text-[0.68rem] font-medium text-slate-400">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-20"
        >
          <span className={`block w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
        </button>

        {/* Desktop nav menu */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 no-underline ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
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
              className="ml-3 px-5 py-2.5 rounded-full text-xs font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                boxShadow: '0 4px 15px rgba(99,102,241,0.35)',
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile drawer */}
        <ul
          className={`md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800 flex flex-col items-start pt-24 pb-8 px-8 gap-2 list-none transition-transform duration-300 ${
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
                  className={`block w-full py-3 text-base font-medium no-underline transition-colors duration-300 ${
                    isActive ? 'text-indigo-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
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
              className="inline-block w-full text-center px-6 py-3 rounded-full text-sm font-semibold text-white no-underline shadow-lg"
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
