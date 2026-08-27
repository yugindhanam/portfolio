'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleElementHover = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.group')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', handleElementHover)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleElementHover)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
      {/* Core Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#38bdf8]"
        animate={{
          x: mousePosition.x - 7,
          y: mousePosition.y - 7,
          scale: isClicked ? 0.5 : isHovered ? 0.4 : 1,
          backgroundColor: isHovered ? '#6366f1' : '#38bdf8',
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 35, mass: 0.1 }}
      />

      {/* Futuristic Expanding Magnetic Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-indigo-400/50 bg-indigo-500/10 backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicked ? 0.7 : isHovered ? 2.2 : 1,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.8)' : 'rgba(99, 102, 241, 0.4)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.18)' : 'rgba(99, 102, 241, 0.08)',
          boxShadow: isHovered
            ? '0 0 30px rgba(56, 189, 248, 0.5), inset 0 0 15px rgba(56, 189, 248, 0.3)'
            : '0 0 15px rgba(99, 102, 241, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 25, mass: 0.15 }}
      />
    </div>
  )
}
