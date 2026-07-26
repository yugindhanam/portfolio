'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
const socials = [
  { icon: FaGithub, href: 'https://github.com/yugindhanam', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yugin-santhosh-k-859981289', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yuginsanthosh43', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:yuginsanthosh1263@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-0 pb-8 border-t border-slate-800/80">
      {/* Top Border Gradient */}
      <div className="h-0.5 mb-12" style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)' }}></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-black tracking-widest text-white font-heading shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
              YSK
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 font-heading mb-0.5">Yugin Santhosh K</h3>
              <p className="text-xs font-medium text-slate-400">IT Engineering Student &amp; Full Stack Developer</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-slate-400 hover:text-indigo-400 no-underline text-xs font-medium transition-colors duration-300">
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400 no-underline transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-800/80 text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Yugin Santhosh K. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Built with <FaHeart className="text-pink-500 animate-heartbeat" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
