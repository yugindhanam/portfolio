'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTerminal, FaCopy, FaCheck } from 'react-icons/fa'

export default function LiveTerminal() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('status')

  const codeSnippets = {
    status: `const developer = {
  name: "Yugin Santhosh K",
  role: "Full Stack Developer",
  college: "Loyola ICAM (LICET)",
  status: "🟢 Open for Internships & Projects",
  location: "Chennai, TN, India"
};`,
    skills: `const techStack = {
  frontend: ["React.js", "Next.js 14", "Tailwind CSS"],
  backend: ["Python", "Node.js", "REST APIs"],
  core: ["Java (OOP/DSA)", "C/C++", "Git/GitHub"],
  aiCloud: ["LiveKit Cloud AI", "AIML", "Unity Game Engine"]
};`,
    contact: `const connect = () => {
  return {
    email: "yuginsanthosh1263@gmail.com",
    phone: "+91 9790132826",
    github: "github.com/yugindhanam",
    linkedin: "linkedin.com/in/yugin-santhosh-k-859981289"
  };
};`,
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto my-8 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-[0_10px_40px_rgba(0,0,0,0.7)] overflow-hidden backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <FaTerminal className="text-indigo-400 text-xs" /> yugin@developer:~
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1">
          {['status', 'skills', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md text-[0.7rem] font-mono capitalize transition-colors ${
                activeTab === tab
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
          <button
            onClick={handleCopy}
            title="Copy snippet"
            className="ml-2 p-1.5 text-slate-400 hover:text-indigo-300 bg-slate-800/60 rounded transition-colors"
          >
            {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300 bg-slate-950/70">
        <pre className="text-indigo-300 font-mono">
          <code>{codeSnippets[activeTab]}</code>
        </pre>
      </div>
    </motion.div>
  )
}
