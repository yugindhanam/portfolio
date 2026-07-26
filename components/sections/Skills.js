'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { skillGroups, tools } from '@/lib/data'

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredGroups = activeFilter === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.type === activeFilter)

  return (
    <section id="skills" className="py-28 px-6 md:px-8 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 px-4 py-1.5 rounded-full mb-3 bg-purple-500/10 border border-purple-500/30">
            Skills &amp; Expertise
          </span>
          <h2 className="font-heading font-extrabold text-gradient-skills tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
            Technical Proficiencies
          </h2>
        </motion.div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'programming', label: 'Programming' },
            { id: 'web', label: 'Web & AI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Skill group cards */}
          {filteredGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              className="rounded-2xl p-6 md:p-8 transition-all duration-300 bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-pro-card hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <h3 className="flex items-center gap-3 font-heading font-bold text-white text-base md:text-lg mb-6 pb-3 border-b border-slate-800">
                <span className="text-xl">{group.icon}</span> {group.category}
              </h3>

              <div className="flex flex-col gap-5">
                {group.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden bg-slate-800/80">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
                          boxShadow: '0 0 12px rgba(99,102,241,0.5)',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      >
                        {/* Shimmer */}
                        <div className="absolute top-0 w-[60%] h-full animate-shimmer"
                          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Tools & Certifications Card */}
          <motion.div
            className="sm:col-span-2 rounded-2xl p-6 md:p-8 transition-all duration-300 bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-pro-card hover:border-cyan-500/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-3 font-heading font-bold text-white text-base md:text-lg mb-6 pb-3 border-b border-slate-800">
              <span className="text-xl">🛠️</span> Tools &amp; Specializations
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 rounded-full text-xs font-medium text-purple-300 cursor-default transition-all duration-300 hover:scale-105 hover:text-white hover:border-purple-400 hover:bg-purple-500/20"
                  style={{ border: '1px solid rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.08)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}