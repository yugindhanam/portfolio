'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { personalInfo } from '@/lib/data'

const contactItems = [
  { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: null },
]
const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FaTwitter, href: personalInfo.twitter, label: 'Twitter' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-block text-[0.8rem] font-semibold tracking-[2px] uppercase text-emerald-400 px-4 py-1.5 rounded-full mb-4"
            style={{ border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.07)' }}>
            Say Hello
          </span>
          <h2 className="font-heading font-extrabold text-gradient-contact mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Get In Touch
          </h2>
          <p className="text-slate-500">Have a project in mind? Let's work together!</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">

          {/* Info panel */}
          <motion.div className="flex flex-col gap-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-slate-400 text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a message!
            </p>

            <div className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <motion.div key={label} className="flex items-center gap-4 cursor-default" whileHover={{ x: 8 }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-indigo-400 shrink-0"
                    style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                    <Icon />
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[1px] text-slate-600 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-400 text-sm no-underline hover:text-indigo-400 transition-colors">{value}</a>
                    ) : (
                      <p className="text-slate-400 text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} title={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400 no-underline transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_5px_15px_rgba(99,102,241,0.4)] social-icon-btn"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {['name', 'email', 'subject'].map((field) => (
              <div
                key={field}
                className={`field-group ${focused === field || form[field] ? 'has-value' : ''}`}
              >
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  id={`contact-${field}`}
                  value={form[field]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused(null)}
                  required
                  autoComplete="off"
                />
                <label htmlFor={`contact-${field}`}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <div className="field-glow"></div>
              </div>
            ))}

            <div className={`field-group ${focused === 'message' || form.message ? 'has-value' : ''}`}>
              <textarea
                name="message"
                id="contact-message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                required
              ></textarea>
              <label htmlFor="contact-message">Message</label>
              <div className="field-glow"></div>
            </div>

            <motion.button
              type="submit"
              disabled={submitted}
              className={`w-full py-3.5 rounded-full font-semibold text-white border-none cursor-pointer transition-all duration-300 text-sm tracking-wide ${
                submitted ? 'cursor-not-allowed' : 'hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)]'
              }`}
              style={{
                background: submitted
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                boxShadow: submitted
                  ? '0 4px 20px rgba(16,185,129,0.35)'
                  : '0 4px 20px rgba(99,102,241,0.35)',
              }}
              whileHover={{ scale: submitted ? 1 : 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message →'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}