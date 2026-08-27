'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { experiences } from '@/lib/data'

const typeIcon = { work: FaBriefcase, education: FaGraduationCap }

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-8 relative [perspective:1000px]">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.7, y: -30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 px-4 py-1.5 rounded-full mb-3 bg-indigo-500/10 border border-indigo-500/30">
            Career Timeline
          </span>
          <h2 className="font-heading font-extrabold text-gradient-experience tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
            Experience &amp; Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-10">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 opacity-40" />

          {/* Mobile line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-0.5 md:hidden rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 opacity-40" />

          {experiences.map((item, idx) => {
            const Icon = typeIcon[item.type] || FaBriefcase
            const isLeft = idx % 2 === 0
            return (
              <motion.div
                key={idx}
                className={`relative flex md:w-1/2 pl-16 md:pl-0 ${
                  isLeft
                    ? 'md:self-start md:pr-12 md:justify-end'
                    : 'md:self-end md:ml-[50%] md:pl-12'
                }`}
                initial={{ opacity: 0, scale: 0.5, x: isLeft ? -90 : 90, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18, delay: idx * 0.15 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                {/* Dot Marker */}
                <div className={`absolute top-6 w-11 h-11 rounded-full flex items-center justify-center z-10 left-0 md:left-auto ${
                  isLeft ? 'md:-right-[22px]' : 'md:-left-[22px]'
                }`}
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 20px rgba(99,102,241,0.5)', border: '2px solid #030712' }}>
                  <Icon className="text-white text-sm" />
                </div>

                {/* Card */}
                <motion.div
                  className="rounded-2xl p-6 md:p-7 max-w-sm w-full transition-all duration-300 cursor-default bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                  style={{ borderLeft: '3px solid #6366f1' }}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                    {item.type === 'education' ? 'Education' : 'Experience & Certifications'}
                  </div>
                  <h3 className="font-heading font-bold text-slate-100 text-lg mb-1">{item.title}</h3>
                  <p className="text-purple-400 font-semibold text-sm mb-1">{item.company}</p>
                  <p className="text-slate-500 text-xs mb-3 font-medium">{item.date}</p>
                  <p className="text-slate-400 text-sm leading-relaxed font-normal">{item.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}