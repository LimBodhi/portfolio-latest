'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Trophy, Award, Star, Users, BookOpen, Target, Calendar, Sparkles, Rocket } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'GEMASTIK ICT Paper Champion',
    description: 'Back-to-back national victories in Indonesia\'s most prestigious tech competition. Research focused on AI applications in Indonesian higher education.',
    year: '2023-2024',
    category: 'Competition',
    impact: 'National Recognition',
    highlight: true,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: BookOpen,
    title: 'Selected Best Project',
    description: 'Literasea project was selected by lecturers as one of the best projects in PBP course. Full-stack bookstore application with mobile version.',
    year: '2024',
    category: 'Academic',
    impact: 'Academic Excellence',
    highlight: true,
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Teaching Assistant',
    description: 'Active mentor for Web Programming and Database Systems courses at Fasilkom UI, helping students understand core programming concepts.',
    year: '2023-Present',
    category: 'Academic',
    impact: 'Student Impact',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Target,
    title: 'GDSC Core Team',
    description: 'Leading tech workshops and open-source initiatives in Google Developer Student Clubs community at UI.',
    year: '2023-Present',
    category: 'Leadership',
    impact: 'Community Building',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: Rocket,
    title: 'FMOC Capstone Project',
    description: 'Built comprehensive SaaS solution for financial management at PT Personel Alih Daya using Spring Boot and Next.js.',
    year: '2024',
    category: 'Project',
    impact: 'Industry Impact',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Star,
    title: 'AI Research Contributor',
    description: 'Developed computer vision system for idle vehicle detection using YOLOv4, contributing to traffic management solutions.',
    year: '2024',
    category: 'Research',
    impact: 'Technical Innovation',
    color: 'from-indigo-400 to-blue-500'
  }
]

const stats = [
  { label: 'Competition Wins', value: '2x', icon: Trophy, color: 'text-yellow-400' },
  { label: 'Projects Completed', value: '6+', icon: Rocket, color: 'text-blue-400' },
  { label: 'Tech Stack', value: '10+', icon: BookOpen, color: 'text-purple-400' },
  { label: 'Years Experience', value: '2+', icon: Calendar, color: 'text-green-400' }
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Competition', 'Academic', 'Research', 'Project', 'Leadership']

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory)

  return (
    <section id="achievements" className="section-gradient-1 section-spacing relative overflow-hidden">
      {/* Background overlay */}
      <div className="section-overlay"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-500"></div>
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
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              My Achievements
            </motion.div>
            
            <h2 className="heading-secondary">
              Milestones & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-lg lg:text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Every achievement tells a story of dedication, learning, and impact. 
              Here are the moments that defined my journey.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 content-spacing">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-card text-center group hover:scale-105 transition-all duration-300"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 content-spacing"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'glass text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredAchievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="group relative h-full"
                >
                  {/* Highlight glow for featured achievements */}
                  {achievement.highlight && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  )}
                  
                  {/* Main Card */}
                  <div className="relative glass-card group-hover:scale-105 h-full flex flex-col">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="glass px-3 py-1 rounded-full text-xs font-medium text-white/90">
                        {achievement.category}
                      </span>
                    </div>

                    {/* Title and Year */}
                    <div className="mb-4">
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar size={12} />
                        <span>{achievement.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-sm leading-relaxed mb-4 flex-1">
                      {achievement.description}
                    </p>

                    {/* Impact */}
                    <div className="mt-auto">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium">
                        {achievement.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 