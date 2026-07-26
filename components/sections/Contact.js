'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaCopy, FaCheck } from 'react-icons/fa'
import { personalInfo } from '@/lib/data'

const contactItems = [
  { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, type: 'email' },
  { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, type: 'phone' },
  { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: null, type: 'location' },
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
  const [copiedField, setCopiedField] = useState(null)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-28 px-6 md:px-8 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 px-4 py-1.5 rounded-full mb-3 bg-cyan-500/10 border border-cyan-500/30">
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-gradient-contact tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-sm mt-2">Have a project in mind or an opportunity? Feel free to reach out!</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* Info panel */}
          <motion.div className="flex flex-col gap-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }}>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-pro-card">
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                I am actively seeking software engineering internships, web development opportunities, and freelance projects. Feel free to contact me directly!
              </p>
            </div>

            {/* Interactive Contact Cards with Copy Button */}
            <div className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, label, value, href, type }) => (
                <motion.div
                  key={label}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] group"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-indigo-400 text-base shrink-0 bg-indigo-500/10 border border-indigo-500/25">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-200 text-xs font-semibold no-underline hover:text-indigo-400 transition-colors">{value}</a>
                      ) : (
                        <p className="text-slate-200 text-xs font-semibold">{value}</p>
                      )}
                    </div>
                  </div>

                  {href && (
                    <button
                      type="button"
                      onClick={() => handleCopy(value, type)}
                      title={`Copy ${label}`}
                      className="p-2 text-slate-400 hover:text-indigo-400 bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer border border-slate-700/50"
                    >
                      {copiedField === type ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-indigo-400 no-underline transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="flex flex-col gap-6 p-7 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-pro-card"
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
                  Your {field.charAt(0).toUpperCase() + field.slice(1)}
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
              <label htmlFor="contact-message">Your Message</label>
              <div className="field-glow"></div>
            </div>

            <motion.button
              type="submit"
              disabled={submitted}
              className={`w-full py-4 rounded-full font-semibold text-white border-none cursor-pointer transition-all duration-300 text-sm tracking-wide ${
                submitted ? 'cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]'
              }`}
              style={{
                background: submitted
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                boxShadow: submitted
                  ? '0 4px 20px rgba(16,185,129,0.35)'
                  : '0 4px 20px rgba(99,102,241,0.35)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              {submitted ? '✓ Message Sent Successfully!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}