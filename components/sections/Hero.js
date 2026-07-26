'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronDown, FaDownload, FaArrowRight } from 'react-icons/fa'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef(null)
  const textArray = personalInfo.roles

  // Typewriter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = textArray[textIndex]
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1)
          setDisplayText(currentText.substring(0, charIndex - 1))
        } else {
          setIsDeleting(false)
          setTextIndex((t) => (t + 1) % textArray.length)
        }
      } else {
        if (charIndex < currentText.length) {
          setCharIndex((c) => c + 1)
          setDisplayText(currentText.substring(0, charIndex + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 70 : 120)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, textArray])

  // Interactive Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      color: Math.random() > 0.5 ? 'rgba(99, 102, 241,' : 'rgba(6, 182, 212,',
      alpha: Math.random() * 0.5 + 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  const socials = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: personalInfo.twitter, label: 'Twitter' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-8 pt-32 pb-20 relative overflow-hidden">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Ambient Radial Glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0 animate-orb-1"
        style={{ top: '-150px', right: '-100px', background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)', filter: 'blur(90px)' }} />
      <div className="absolute w-[450px] h-[450px] rounded-full pointer-events-none z-0 animate-orb-2"
        style={{ bottom: '-100px', left: '-100px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', filter: 'blur(90px)' }} />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Availability Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse"></span>
          Available for Internships &amp; Full Stack Projects
        </motion.div>

        {/* Profile Avatar with Glowing Gradient Ring */}
        <motion.div
          className="mx-auto mb-6 w-fit"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-44 h-44 rounded-full p-[3px] shadow-[0_0_30px_rgba(99,102,241,0.5)]" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)' }}>
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-slate-950">
              <Image
                src="/profile.jpg"
                alt="Yugin Santhosh K"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.p className="text-slate-400 font-medium text-sm mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          👋 Hello, I&apos;m
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="font-heading font-extrabold text-gradient-hero mb-3 leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p className="text-slate-300 font-medium text-lg md:text-xl mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {personalInfo.title}
        </motion.p>

        {/* Typewriter */}
        <div className="text-indigo-400 font-semibold text-xl md:text-2xl min-h-[2.5rem] mb-8 font-heading tracking-wide">
          {displayText}
          <span className="ml-1 inline-block text-cyan-400 animate-blink">|</span>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
            }}
          >
            View Projects <FaArrowRight className="text-xs" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-indigo-300 no-underline border border-indigo-500/50 bg-indigo-500/10 transition-all duration-300 hover:bg-indigo-500/20 hover:scale-105 hover:border-indigo-400"
          >
            Get In Touch
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Yugin_Santhosh_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-300 no-underline border border-slate-700 bg-slate-900/60 transition-all duration-300 hover:border-slate-500 hover:text-white hover:scale-105"
          >
            <FaDownload className="text-xs text-indigo-400" /> Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex gap-3.5 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-indigo-400 no-underline transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)'; e.currentTarget.style.borderColor = 'transparent' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)' }}
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-medium no-underline hover:text-indigo-400 transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <FaChevronDown />
      </motion.a>
    </section>
  )
}