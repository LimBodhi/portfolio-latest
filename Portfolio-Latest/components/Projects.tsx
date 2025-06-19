'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'EduAI Platform',
    description: 'Platform pembelajaran berbasis AI yang membantu personalisasi materi belajar untuk setiap siswa. Menggunakan machine learning untuk menganalisis pola belajar dan memberikan rekomendasi yang tepat.',
    role: 'Full Stack Developer',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
    year: '2024',
    featured: true,
    demoUrl: 'https://demo.eduai.com',
    githubUrl: 'https://github.com/yourusername/eduai-platform'
  },
  {
    title: 'Smart Campus Assistant',
    description: 'Aplikasi mobile yang membantu mahasiswa UI dalam aktivitas kampus sehari-hari. Fitur meliputi jadwal kuliah, maps kampus, dan integrasi dengan sistem akademik.',
    role: 'Mobile Developer',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    year: '2024',
    demoUrl: 'https://demo.smartcampus.com',
    githubUrl: 'https://github.com/yourusername/smart-campus'
  },
  {
    title: 'Learning Analytics Dashboard',
    description: 'Dashboard analitik untuk membantu dosen memantau progress pembelajaran mahasiswa. Visualisasi data interaktif dengan insights yang actionable.',
    role: 'Data Analyst & Frontend Developer',
    technologies: ['Python', 'Pandas', 'React', 'D3.js', 'PostgreSQL'],
    year: '2023',
    featured: true,
    demoUrl: 'https://demo.analytics.com',
    githubUrl: 'https://github.com/yourusername/learning-analytics'
  },
  {
    title: 'Virtual Lab Simulator',
    description: 'Simulator laboratorium virtual untuk praktikum programming. Menyediakan environment yang aman untuk belajar tanpa khawatir merusak sistem.',
    role: 'Backend Developer',
    technologies: ['Docker', 'Node.js', 'React', 'WebSocket', 'Redis'],
    year: '2023',
    githubUrl: 'https://github.com/yourusername/virtual-lab'
  },
  {
    title: 'AI Paper Summarizer',
    description: 'Tool AI yang membantu mahasiswa merangkum paper akademik dengan cepat. Menggunakan NLP untuk mengekstrak poin-poin penting dari paper ilmiah.',
    role: 'AI Engineer',
    technologies: ['Python', 'NLTK', 'Transformers', 'FastAPI', 'Vue.js'],
    year: '2023',
    demoUrl: 'https://demo.papersum.com'
  },
  {
    title: 'Collaborative Code Review',
    description: 'Platform untuk code review yang digunakan dalam mata kuliah programming. Memfasilitasi peer review dan feedback yang konstruktif.',
    role: 'Full Stack Developer',
    technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL'],
    year: '2022',
    githubUrl: 'https://github.com/yourusername/code-review'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berikut adalah beberapa proyek yang telah saya kerjakan, 
              fokus pada pengembangan solusi education technology dan AI.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="text-gray-600 mb-4">
              Tertarik melihat lebih banyak proyek saya?
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 