'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Literasea',
    description: 'Aplikasi web bookstore yang dibangun untuk ujian tengah semester PBP. Dipilih oleh dosen sebagai salah satu proyek terbaik semester ini. Tersedia versi web dan mobile.',
    role: 'Full Stack Developer',
    technologies: ['Django', 'Dart', 'PostgreSQL', 'Koyeb'],
    year: '2024',
    image: '/images/projects/literasea.png',
    demoUrl: 'https://tired-aloysia-fmoc-a95e96cf.koyeb.app/',
    githubUrl: 'https://github.com/LimBodhi/literasea'
  },
  {
    title: 'FMOC',
    description: 'Proyek capstone SaaS untuk mengelola proses finansial di PT Personel Alih Daya. Sistem terintegrasi dengan fitur manajemen keuangan yang komprehensif.',
    role: 'Full Stack Developer',
    technologies: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Docker'],
    year: '2024',
    demoUrl: 'https://www.fmoc-synergy.com',
    githubUrl: 'https://github.com/LimBodhi/fmoc'
  },
  {
    title: 'Pacilflix',
    description: 'Mockup layanan streaming untuk mata kuliah Database. Menggunakan SQL murni (tanpa ORM) melalui psycopg2 untuk optimasi performa database.',
    role: 'Backend Developer',
    technologies: ['Django', 'PostgreSQL', 'psycopg2', 'HTML/CSS'],
    year: '2024',
    githubUrl: 'https://github.com/LimBodhi/Pacilflix'
  },
  {
    title: 'Idle Car Detector',
    description: 'Sistem berbasis computer vision untuk mendeteksi kendaraan yang parkir sembarangan menggunakan YOLOv4 dan background subtraction. Solusi untuk mengatasi kemacetan di Indonesia.',
    role: 'Computer Vision Engineer',
    technologies: ['Python', 'OpenCV', 'YOLOv4', 'Computer Vision'],
    year: '2024',
    githubUrl: 'https://github.com/LimBodhi/idle-car-detector'
  },
  {
    title: 'Tibib',
    description: 'Simulasi platform fintech untuk trading mutual fund dengan arsitektur microservices dan sistem autentikasi yang aman.',
    role: 'Backend Developer',
    technologies: ['Django', 'Microservices', 'Authentication', 'PostgreSQL'],
    year: '2023',
    demoUrl: 'https://kelompok-13-tibib.pkpl.cs.ui.ac.id/',
    githubUrl: 'https://github.com/LimBodhi/tibib'
  },
  {
    title: 'Literasea Mobile',
    description: 'Versi mobile dari aplikasi Literasea bookstore yang dibangun dengan Flutter untuk pengalaman mobile yang optimal.',
    role: 'Mobile Developer',
    technologies: ['Dart', 'Flutter', 'Django API', 'Mobile Development'],
    year: '2024',
    githubUrl: 'https://github.com/LimBodhi/literasea-mobile'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="section-gradient-3 section-spacing relative overflow-hidden">
      {/* Background overlay */}
      <div className="section-overlay"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
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
              <span className="glass px-4 py-2 rounded-full text-white/90 text-sm font-semibold">
                Portfolio
              </span>
            </motion.div>
            <h2 className="heading-secondary">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg lg:text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Berikut adalah beberapa proyek yang telah saya kerjakan, 
              fokus pada full-stack development, AI applications, dan fintech solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/LimBodhi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass px-8 py-3 rounded-full font-semibold"
            >
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 