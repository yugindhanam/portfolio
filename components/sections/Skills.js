'use client'

import { motion } from 'framer-motion'
import { skillGroups, tools } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-block text-[0.8rem] font-semibold tracking-[2px] uppercase text-purple-400 px-4 py-1.5 rounded-full mb-4"
            style={{ border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.07)' }}>
            What I Know
          </span>
          <h2 className="font-heading font-extrabold text-gradient-skills" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Skill group cards */}
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl p-8 transition-all duration-300 hover:border-indigo-500/30 skill-card"
              style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(99,102,241,0.12)', backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2.5 font-heading font-bold text-slate-200 text-lg mb-6">
                <span>{group.icon}</span> {group.category}
              </h3>

              <div className="flex flex-col gap-5">
                {group.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-semibold text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(51,65,85,0.6)' }}>
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)', boxShadow: '0 0 12px rgba(99,102,241,0.5)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      >
                        {/* Shimmer */}
                        <div className="absolute top-0 w-[60%] h-full animate-shimmer"
                          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }} />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Tools card — full width */}
          <motion.div
            className="sm:col-span-2 rounded-2xl p-8 transition-all duration-300 hover:border-indigo-500/30 skill-card"
            style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(99,102,241,0.12)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2.5 font-heading font-bold text-slate-200 text-lg mb-6">
              <span>🛠️</span> Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-1.5 rounded-full text-[0.82rem] font-medium text-purple-300 cursor-default transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-slate-200 hover:bg-purple-500/20 hover:border-purple-500 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] tool-badge"
                  style={{ border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.08)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.05 }}
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