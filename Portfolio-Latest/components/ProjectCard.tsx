'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, User } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  role: string
  technologies: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string
  year: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  role,
  technologies,
  image,
  demoUrl,
  githubUrl,
  year,
  featured = false
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover ${
        featured ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
      }`}
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-50 to-primary-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-primary-600">
                  {title.charAt(0)}
                </span>
              </div>
              <p className="text-primary-600 font-medium">Project Preview</p>
            </div>
          </div>
        )}
        
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Calendar size={14} />
            {year}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-primary-600 text-sm font-medium">
            <User size={16} />
            <span>{role}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 