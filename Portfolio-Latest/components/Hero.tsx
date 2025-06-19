'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToTechStack = () => {
    document.querySelector('#tech-stack')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="section-gradient-1 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="section-overlay"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 h-32 sm:h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-24 sm:w-36 h-24 sm:h-36 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-40 sm:w-56 h-40 sm:h-56 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container-custom relative z-10 section-padding pt-20 pb-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 glass rounded-full text-white/90 text-sm font-medium">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="heading-primary mb-8"
          >
            Lim Bodhi Wijaya
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-6">
              Information Systems Student & Teaching Assistant
            </h2>
            <p className="text-lg lg:text-xl text-body max-w-3xl mx-auto leading-relaxed">
              6th-semester Information Systems student passionate about full-stack development, 
              AI applications, and creating impactful digital products at Fasilkom UI
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="glass-card text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2">2x</div>
              <div className="text-sm text-muted">GEMASTIK Winner</div>
            </div>
            <div className="glass-card text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-sm text-muted">Projects Completed</div>
            </div>
            <div className="glass-card text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2">2+</div>
              <div className="text-sm text-muted">Years Teaching</div>
            </div>
          </motion.div>

          {/* Social Links - Moved up with more margin bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-4 justify-center mb-20"
          >
            <a
              href="https://github.com/LimBodhi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/limbodhiwijaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="mailto:bodia2016@gmail.com"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} className="text-white" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Down Indicator - Positioned much lower */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToTechStack}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm">Explore More</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 