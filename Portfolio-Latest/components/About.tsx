'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Users, Brain, Award, Heart, Zap, Target, Rocket } from 'lucide-react'


const achievements = [
  {
    icon: Award,
    title: 'GEMASTIK Winner',
    subtitle: '2023 & 2024',
    description: 'Back-to-back national ICT Paper competition victories'
  },
  {
    icon: GraduationCap,
    title: 'Teaching Assistant',
    subtitle: 'Fasilkom UI',
    description: 'Active mentor for Web Programming and Database courses'
  },
  {
    icon: Rocket,
    title: 'Information Systems',
    subtitle: '6th Semester',
    description: 'Focused on full-stack development and AI applications'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 lg:right-20 w-48 lg:w-64 h-48 lg:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 lg:bottom-40 left-10 lg:left-20 w-60 lg:w-80 h-60 lg:h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-3 lg:px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-xs lg:text-sm font-semibold">
                Get to know me
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Beyond the <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Code</span>
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              I&apos;m passionate about bridging technology and education to create meaningful learning experiences. 
              Here&apos;s what drives me every day.
            </p>
          </div>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-xl border border-gray-100 mb-12 lg:mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                  My Journey
                </h3>
                <div className="space-y-3 lg:space-y-4 text-gray-600 leading-relaxed text-sm lg:text-lg">
                  <p>
                    Saya adalah mahasiswa Sistem Informasi semester 6 di Fasilkom UI dengan passion 
                    yang besar dalam full-stack development, penelitian, dan membangun produk digital 
                    yang berdampak. Saat ini saya fokus mengeksplorasi Docker, Spring Boot, dan 
                    aplikasi AI di berbagai domain.
                  </p>
                  <p>
                    Sebagai Teaching Assistant, saya aktif membantu mahasiswa memahami konsep 
                    Web Programming dan Database Systems. Pengalaman ini mengajarkan saya cara 
                    berkomunikasi teknis yang efektif dan pentingnya mentorship dalam pembelajaran.
                  </p>
                  <p className="hidden sm:block">
                    Saya telah memenangkan kompetisi GEMASTIK ICT Paper dua tahun berturut-turut (2023-2024) 
                    dan aktif dalam komunitas Google Developer Student Clubs. Melalui berbagai proyek, 
                    saya berkomitmen untuk menciptakan solusi teknologi yang inovatif dan bermanfaat.
                  </p>
                </div>
              </div>
              
              {/* Visual Stats */}
              <div className="grid grid-cols-2 gap-3 lg:gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-6 lg:w-8 h-6 lg:h-8 text-indigo-600 mx-auto mb-2 lg:mb-3" />
                      <h4 className="font-bold text-gray-900 text-xs lg:text-sm mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-indigo-600 font-semibold mb-1 lg:mb-2">
                        {achievement.subtitle}
                      </p>
                      <p className="text-xs text-gray-600 leading-tight">
                        {achievement.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 