'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-block text-[0.8rem] font-semibold tracking-[2px] uppercase text-pink-400 px-4 py-1.5 rounded-full mb-4"
            style={{ border: '1px solid rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.07)' }}>
            My Work
          </span>
          <h2 className="font-heading font-extrabold text-gradient-projects mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Featured Projects
          </h2>
          <p className="text-slate-500">A selection of things I've built</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl overflow-hidden cursor-default transition-all duration-300 group hover:border-indigo-500/35 project-card"
              style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(99,102,241,0.12)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Banner */}
              <div className="relative h-36 overflow-hidden" style={{ background: project.gradient }}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)' }} />
                {/* Icon buttons — appear on hover */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm no-underline transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm no-underline transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-slate-200 text-lg mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium text-indigo-300"
                      style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}