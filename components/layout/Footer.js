'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
const socials = [
  { icon: FaGithub, href: 'https://github.com/yugindhanam', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yugin-santhosh-k-859981289', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yuginsanthosh43', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:yuginsanthosh43@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative bg-black/90 pt-0 pb-6">
      {/* Gradient divider */}
      <div className="h-px mb-12" style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #ec4899, transparent)' }}></div>

      <div className="max-w-6xl mx-auto px-8">
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl flex items-center justify-center text-[0.75rem] font-extrabold tracking-wide text-white font-heading shrink-0"
              style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}>
              YS
            </span>
            <div>
              <h3 className="text-[1.05rem] font-bold text-slate-200 font-heading mb-0.5">Yugin Santhosh K</h3>
              <p className="text-xs text-slate-600">IT Engineering Student &amp; Full Stack Developer</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-slate-600 hover:text-indigo-400 no-underline text-sm transition-colors duration-300">
                {l}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base text-indigo-500 no-underline transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_5px_15px_rgba(99,102,241,0.4)]"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(99,102,241,0.1)'}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-6 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Yugin Santhosh K. All rights reserved.</p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Made with <FaHeart className="text-pink-500 animate-heartbeat" /> using Next.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
