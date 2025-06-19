'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Trophy, Award, Star, Users, BookOpen, Target, Calendar, MapPin, Sparkles } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'GEMASTIK ICT Paper Champion',
    description: 'Back-to-back national victories in Indonesia\'s most prestigious tech competition. Research focused on AI-enhanced learning analytics.',
    year: '2023-2024',
    category: 'Competition',
    impact: 'National Recognition',
    highlight: true,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Award,
    title: 'TASLA Scholar',
    description: 'Exclusive teaching excellence scholarship recognizing outstanding academic performance and dedication to education.',
    year: '2023-2024',
    category: 'Scholarship',
    impact: 'Academic Excellence',
    highlight: true,
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: BookOpen,
    title: 'Research Contributor',
    description: 'Co-authored groundbreaking research on AI applications in Indonesian higher education systems.',
    year: '2024',
    category: 'Research',
    impact: 'Scientific Impact',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Users,
    title: 'Teaching Assistant',
    description: 'Mentoring 50+ students across multiple courses including Web Programming and Database Systems.',
    year: '2023-Present',
    category: 'Academic',
    impact: 'Student Impact',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Target,
    title: 'GDSC Core Team',
    description: 'Leading tech workshops and open-source initiatives in Google Developer Student Clubs community.',
    year: '2023-Present',
    category: 'Leadership',
    impact: 'Community Building',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: Star,
    title: 'Consistent Dean\'s List',
    description: 'Maintaining top academic performance with 3.75+ GPA throughout university journey.',
    year: '2022-2024',
    category: 'Academic',
    impact: 'Academic Consistency',
    color: 'from-indigo-400 to-blue-500'
  }
]

const stats = [
  { label: 'Competition Wins', value: '2x', icon: Trophy, color: 'text-yellow-600' },
  { label: 'Students Mentored', value: '50+', icon: Users, color: 'text-blue-600' },
  { label: 'Research Papers', value: '2+', icon: BookOpen, color: 'text-purple-600' },
  { label: 'Years Experience', value: '2+', icon: Calendar, color: 'text-green-600' }
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Competition', 'Scholarship', 'Research', 'Academic', 'Leadership']

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory)

  return (
    <section id="achievements" className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 lg:top-40 left-10 lg:left-20 w-48 lg:w-72 h-48 lg:h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 w-60 lg:w-96 h-60 lg:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 lg:w-80 h-48 lg:h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
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
              className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs lg:text-sm font-medium mb-4 lg:mb-6"
            >
              <Sparkles size={14} />
              My Achievements
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6">
              Milestones & <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-base lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              Every achievement tells a story of dedication, learning, and impact. 
              Here are the moments that defined my journey.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-12 lg:mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <Icon className={`w-6 lg:w-8 h-6 lg:h-8 mx-auto mb-2 lg:mb-3 ${stat.color}`} />
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-white/70">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12 px-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl lg:rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  )}
                  
                  {/* Main Card */}
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group-hover:scale-105 h-full flex flex-col">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                      </div>
                      <span className="px-2 lg:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        {achievement.category}
                      </span>
                    </div>

                    {/* Title and Year */}
                    <div className="mb-3 lg:mb-4">
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 text-xs lg:text-sm">
                        <Calendar size={12} />
                        <span>{achievement.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 flex-grow">
                      {achievement.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="flex items-center gap-2 mt-auto">
                      <MapPin size={12} className="text-white/60" />
                      <span className="text-xs text-white/60 font-medium">
                        {achievement.impact}
                      </span>
                    </div>

                    {/* Highlight indicator */}
                    {achievement.highlight && (
                      <div className="absolute top-3 lg:top-4 right-3 lg:right-4">
                        <div className="w-2 lg:w-3 h-2 lg:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-12 lg:mt-16"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-white/80 mb-4 lg:mb-6 text-sm lg:text-base">
                Every achievement started with a conversation. Let's discuss how we can work together.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-sm lg:text-base"
              >
                <span>Let's Connect</span>
                <Sparkles size={14} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 