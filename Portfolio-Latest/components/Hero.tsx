'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, Sparkles, Coffee, Code } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const floatingItems = [
    { icon: Code, text: 'Code', delay: 0 },
    { icon: Coffee, text: 'Coffee', delay: 0.5 },
    { icon: Sparkles, text: 'Ideas', delay: 1 }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated shapes */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-bounce"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-24 sm:w-40 h-24 sm:h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs sm:text-sm font-medium">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight"
            >
              Lim Bodhi
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Wijaya
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6 lg:mb-8"
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/90 font-light mb-3 lg:mb-4 leading-relaxed">
                Crafting digital experiences through code, education, and AI innovation
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Teaching Assistant & Student at Universitas Indonesia • Building the future of education technology
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8"
            >
              <a 
                href="#contact" 
                className="group bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center text-sm lg:text-base"
              >
                <Mail size={18} />
                Let's Connect
                <Sparkles className="group-hover:rotate-12 transition-transform" size={14} />
              </a>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center border border-white/20 text-sm lg:text-base">
                <Download size={18} />
                Download CV
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-3 lg:gap-4 justify-center sm:justify-start"
            >
              <a
                href="https://github.com/LimBodhi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 lg:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/limbodhiwijaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 lg:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="mailto:bodia2016@gmail.com"
                className="p-2 lg:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} className="text-white" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-xs lg:text-sm">Scroll Down</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 