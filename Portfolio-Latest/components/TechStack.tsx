'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Smartphone, Settings } from 'lucide-react'

const techCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-blue-400 to-cyan-500',
    technologies: ['Tailwind CSS', 'SvelteKit', 'Next.js', 'Vue.js']
  },
  {
    title: 'Backend',
    icon: Code,
    color: 'from-green-400 to-emerald-500',
    technologies: ['Spring Boot', 'Django', 'Next.js']
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-purple-400 to-violet-500',
    technologies: ['PostgreSQL', 'Database Design']
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: 'from-pink-400 to-rose-500',
    technologies: ['Flutter']
  },
  {
    title: 'DevOps & Tools',
    icon: Settings,
    color: 'from-indigo-400 to-blue-500',
    technologies: ['Docker', 'Git', 'Vercel', 'Koyeb', 'Figma', 'Microservices']
  }
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="tech-stack" className="section-gradient-2 section-spacing relative overflow-hidden">
      {/* Background overlay */}
      <div className="section-overlay"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10 section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center content-spacing">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
            </motion.div>
            <h2 className="heading-secondary">
              Technologies & <span className="gradient-text">Skills</span>
            </h2>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-card group hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white ml-4">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="#projects"
              className="btn-gradient px-8 py-3 rounded-full font-semibold"
            >
              My Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 