'use client'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:your.email@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom section-padding">
        <div className="text-center">
          {/* Logo/Name */}
          <h3 className="text-2xl font-bold mb-4">
            Your Name
          </h3>
          
          {/* Tagline */}
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Teaching Assistant & Education-AI Enthusiast
            <br />
            Building the future of education through technology
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} Your Name. Made with <Heart size={16} className="text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 