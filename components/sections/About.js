'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaDownload, FaUserGraduate, FaCode } from 'react-icons/fa'
import { personalInfo } from '@/lib/data'

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / (1500 / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}</span>
}

const techStack = ['Python', 'JavaScript', 'Java', 'React.js', 'Next.js 14', 'Tailwind CSS', 'Unity', 'LiveKit AI', 'Git']

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-8 relative [perspective:1000px]">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.7, y: -30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400 px-4 py-1.5 rounded-full mb-3 bg-indigo-500/10 border border-indigo-500/30">
            <FaUserGraduate className="text-indigo-400" /> Professional Profile
          </span>
          <h2 className="font-heading font-extrabold text-gradient-about tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">

          {/* Bio card — Aggressive 3D Fly-In */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">
              <p className="text-slate-300 text-[1.05rem] leading-[1.8] font-normal">{personalInfo.bio}</p>
            </div>

            {/* Tech chips */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                <FaCode /> Core Technologies &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-1.5 rounded-full text-xs font-medium text-indigo-300 cursor-default transition-all duration-300 hover:scale-110 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    style={{ border: '1px solid rgba(99,102,241,0.25)', background: 'rgba(99,102,241,0.08)' }}
                    initial={{ opacity: 0, scale: 0.4, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download="Yugin_Santhosh_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold text-white no-underline w-fit transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', boxShadow: '0 4px 20px rgba(99,102,241,0.35)' }}
            >
              <FaDownload className="text-xs" /> Download Resume PDF
            </a>
          </motion.div>

          {/* Stats side — Aggressive 3D Fly-In */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.2 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl px-7 py-6 cursor-default transition-all duration-300 bg-slate-900/70 border border-slate-800 backdrop-blur-xl hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <h3 className="font-heading font-extrabold text-4xl md:text-5xl text-gradient-stat mb-1 leading-none">
                  <AnimatedNumber target={stat.value} />+
                </h3>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 80% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
              </motion.div>
            ))}

            {/* Open to work card */}
            <motion.div
              className="flex items-center gap-4 rounded-2xl px-6 py-4 cursor-default transition-all duration-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              whileHover={{ scale: 1.03 }}
            >
              <span className="w-3 h-3 rounded-full shrink-0 bg-emerald-400 animate-glow-pulse"></span>
              <div>
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-0.5">Status: Open to Opportunities</p>
                <p className="text-slate-400 text-xs">Available for software engineering internships</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}