'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, User, Star, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    if (image) {
      setIsModalOpen(true)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Restore body scroll
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`glass-card group overflow-hidden h-full flex flex-col ${
          featured ? 'ring-2 ring-white/30' : ''
        }`}
      >
        <div className="relative h-48 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
          {image ? (
            <div className="relative w-full h-full cursor-pointer" onClick={openModal}>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Zoom overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ZoomIn size={20} />
                  <span>Click to zoom</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-white">
                    {title.charAt(0)}
                  </span>
                </div>
                <p className="text-white/80 font-medium">Project Preview</p>
              </div>
            </div>
          )}
          
          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star size={14} />
                Featured
              </span>
            </div>
          )}

          {/* Year badge */}
          <div className="absolute top-4 right-4">
            <span className="glass text-white/90 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Calendar size={14} />
              {year}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
              <User size={16} />
              <span>{role}</span>
            </div>
          </div>

          <p className="text-white/80 text-sm leading-relaxed mb-4 flex-1">
            {description}
          </p>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/10 text-white/80 rounded-md text-xs font-medium hover:bg-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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
                className="flex-1 glass border border-white/30 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github size={16} />
                <span className="text-sm">Code</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {isModalOpen && image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 p-2 glass rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <div className="relative w-full h-full glass rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                
                {/* Image info overlay */}
                <div className="absolute bottom-0 left-0 right-0 glass border-t border-white/20 p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/80 text-sm">{description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white/80 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 