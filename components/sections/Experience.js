'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { experiences } from '@/lib/data'

const typeIcon = { work: FaBriefcase, education: FaGraduationCap }

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-block text-[0.8rem] font-semibold tracking-[2px] uppercase text-cyan-400 px-4 py-1.5 rounded-full mb-4"
            style={{ border: '1px solid rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.07)' }}>
            My Journey
          </span>
          <h2 className="font-heading font-extrabold text-gradient-experience" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Experience & Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-10">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, #6366f1, #8b5cf6, #ec4899, transparent)' }} />

          {/* Mobile line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-0.5 md:hidden"
            style={{ background: 'linear-gradient(180deg, transparent, #6366f1, #8b5cf6, #ec4899, transparent)' }} />

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
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Dot marker */}
                <div className={`absolute top-6 w-11 h-11 rounded-full flex items-center justify-center z-10 left-0 md:left-auto ${
                  isLeft ? 'md:-right-[22px]' : 'md:-left-[22px]'
                }`}
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}>
                  <Icon className="text-white text-sm" />
                </div>

                {/* Card */}
                <motion.div
                  className="rounded-2xl p-6 max-w-sm w-full transition-all duration-300 cursor-default hover:border-indigo-500 hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)] exp-card"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(99,102,241,0.15)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'inset 4px 0 0 #6366f1',
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-indigo-400 mb-1">{item.type}</div>
                  <h3 className="font-heading font-bold text-slate-200 text-[1.05rem] mb-0.5">{item.title}</h3>
                  <p className="text-purple-400 font-semibold text-sm mb-0.5">{item.company}</p>
                  <p className="text-slate-600 text-xs mb-3">{item.date}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}