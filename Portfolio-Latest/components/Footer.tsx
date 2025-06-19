'use client'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/LimBodhi',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/limbodhiwijaya/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:bodia2016@gmail.com',
      label: 'Email'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="section-gradient-2 relative overflow-hidden">
      {/* Background overlay */}
      <div className="section-overlay"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10 section-padding">
        <div className="text-center">
          {/* Logo/Name */}
          <h3 className="text-3xl font-bold text-white mb-4">
            Lim Bodhi Wijaya
          </h3>
          
          {/* Tagline */}
          <p className="text-body mb-8 max-w-md mx-auto">
            Information Systems Student & Teaching Assistant
            <br />
            Building impactful digital products with cutting-edge technology
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon size={20} className="text-white group-hover:text-blue-300 transition-colors" />
                </a>
              )
            })}
          </div>

          {/* Back to Top */}
          <div className="mb-8">
            <button
              onClick={scrollToTop}
              className="glass px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-muted text-sm flex items-center justify-center gap-2">
              © {currentYear} Lim Bodhi Wijaya. Made with <Heart size={16} className="text-red-400" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 