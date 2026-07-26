'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa'
import { projects } from '@/lib/data'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-28 px-6 md:px-8 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 px-4 py-1.5 rounded-full mb-3 bg-cyan-500/10 border border-cyan-500/30">
            <FaFolderOpen className="text-cyan-400" /> Portfolio Showcase
          </span>
          <h2 className="font-heading font-extrabold text-gradient-projects tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm mt-2">Explore my recent web development, AI integration, and software projects</p>
        </motion.div>

        {/* Interactive Filter Tabs */}
        <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Applications' },
            { id: 'ai', label: 'AI & Cloud' },
            { id: 'game', label: 'Game Dev' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="rounded-2xl overflow-hidden cursor-default transition-all duration-300 group bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-pro-card hover:border-slate-700 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              {/* Card Gradient Banner Header */}
              <div className="relative h-40 overflow-hidden" style={{ background: project.gradient }}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%)' }} />

                {/* Quick Action Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-base no-underline transition-all duration-200 hover:scale-110 hover:bg-slate-900/80"
                    style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-base no-underline transition-all duration-200 hover:scale-110 hover:bg-slate-900/80"
                    style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-7">
                <h3 className="font-heading font-bold text-slate-100 text-lg md:text-xl mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-normal">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-[0.72rem] font-medium text-indigo-300"
                      style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)' }}>
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