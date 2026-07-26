'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa'
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
    }, isDeleting ? 80 : 130)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, textArray])

  // Particle canvas
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
      alpha: Math.random() * 0.5 + 0.1,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`
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
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-28 pb-20 relative overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Background orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0 animate-orb-1"
        style={{ top: '-150px', right: '-100px', background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0 animate-orb-2"
        style={{ bottom: '-100px', left: '-100px', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none z-0 animate-orb-3"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Avatar */}
        <motion.div
          className="mx-auto mb-6 w-fit"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-44 h-44 rounded-full p-[3px]" style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899, #8b5cf6)' }}>
            <div className="w-full h-full rounded-full overflow-hidden relative">
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

        <motion.p className="text-slate-500 text-sm mb-1 tracking-wide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          className="font-heading font-extrabold text-gradient-hero mb-2 leading-tight"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p className="text-slate-400 text-lg mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {personalInfo.title}
        </motion.p>

        {/* Typewriter */}
        <div className="text-indigo-500 font-semibold text-xl min-h-[2.5rem] mb-8">
          {displayText}
          <span className="ml-0.5 inline-block animate-blink">|</span>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects"
            className="px-7 py-3 rounded-full text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.6)]"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 4px 20px rgba(99,102,241,0.4)' }}>
            View My Work
          </a>
          <a href="#contact"
            className="px-7 py-3 rounded-full text-sm font-semibold text-indigo-400 no-underline border border-indigo-500 transition-all duration-300 hover:bg-indigo-500/10 hover:-translate-y-1">
            Get In Touch
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Yugin_Santhosh_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-400 no-underline border border-slate-600/30 bg-white/[0.04] transition-all duration-300 hover:text-slate-200 hover:border-slate-400/50 hover:-translate-y-1"
          >
            <FaDownload className="text-xs" /> Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div className="flex gap-4 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-lg text-indigo-400 no-underline transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-white hover:shadow-[0_8px_20px_rgba(99,102,241,0.4)] social-icon-btn"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 text-xs no-underline hover:text-indigo-400 transition-colors z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <FaChevronDown />
      </motion.a>
    </section>
  )
}