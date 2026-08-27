'use client'

import { useEffect, useState } from 'react'

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      {/* Background Video (galaxy.mp4) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45 transition-opacity duration-1000 scale-105"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for optimal contrast & legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80 backdrop-blur-[1px]" />

      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full transition-all duration-700 opacity-40 blur-[130px]"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(6,182,212,0.25) 50%, transparent 80%)',
        }}
      />

      {/* Ambient Floating Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-transparent blur-[120px] animate-orb-1" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500/20 via-blue-600/15 to-transparent blur-[130px] animate-orb-2" />

      {/* Geometric Synth Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:30px_30px] opacity-60" />
    </div>
  )
}
