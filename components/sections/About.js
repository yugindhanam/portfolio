'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
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

const techStack = ['Java', 'Python', 'JavaScript', 'React', 'Next.js', 'Node.js', 'SQL', 'Git']

export default function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-block text-[0.8rem] font-semibold tracking-[2px] uppercase text-indigo-400 px-4 py-1.5 rounded-full mb-4"
            style={{ border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.07)' }}>
            Who I Am
          </span>
          <h2 className="font-heading font-extrabold text-gradient-about" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">

          {/* Text side */}
          <motion.div className="flex flex-col gap-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
            <p className="text-slate-400 text-[1.05rem] leading-[1.8]">{personalInfo.bio}</p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-1.5 rounded-full text-[0.82rem] font-medium text-indigo-300 cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-200 hover:bg-indigo-500/20 hover:border-indigo-500 tech-chip"
                  style={{ border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <a
              href={personalInfo.resumeUrl}
              download="Yugin_Santhosh_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold text-white no-underline w-fit transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)]"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 4px 20px rgba(99,102,241,0.35)' }}
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Stats side */}
          <motion.div className="flex flex-col gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl px-8 py-6 cursor-default transition-all duration-300 hover:border-indigo-500/40 stat-card"
                style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(99,102,241,0.15)', backdropFilter: 'blur(10px)' }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="font-heading font-extrabold text-5xl text-gradient-stat mb-1 leading-none">
                  <AnimatedNumber target={stat.value} />+
                </h3>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 80% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />
              </motion.div>
            ))}

            {/* Open to work card */}
            <motion.div
              className="flex items-center gap-4 rounded-2xl px-6 py-4 cursor-default transition-all duration-300 hover:bg-emerald-500/10 avail-card"
              style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}
              whileHover={{ y: -4 }}
            >
              <span className="w-3 h-3 rounded-full shrink-0 bg-emerald-500 animate-glow-pulse"></span>
              <div>
                <p className="text-emerald-400 text-sm font-semibold mb-0.5">Open to Work</p>
                <p className="text-slate-500 text-xs">Available for internships & freelance</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}