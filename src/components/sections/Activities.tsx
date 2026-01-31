'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mountain, Tent, Camera, Waves } from 'lucide-react'
import Section from '@/components/ui/Section'
import { activities } from '@/data/activities'
import { ANIMATION_VARIANTS } from '@/lib/constants'

const IconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  'Mountain': Mountain,
  'Tent': Tent,
  'Camera': Camera,
  'Waves': Waves,
}

export default function Activities() {
  return (
    <Section id="activities" className="bg-white">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="font-semibold tracking-wider text-sm uppercase text-forest-green">
          What I Do
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
          Activities & Skills
        </h2>
        <p className="text-gray-600">
          写真を撮るだけでなく、すべてのショットの背後にあるストーリーを理解するために環境に没頭します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((activity, index) => {
          const IconComponent = IconMap[activity.skills?.[0] || 'Mountain'] || Mountain
          
          return (
            <motion.div
              key={activity.id}
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ 
                ...ANIMATION_VARIANTS.fadeInUp.transition,
                delay: index * 0.1 
              }}
              className="p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group bg-white rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-forest-green/10">
                <IconComponent className="text-forest-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {activity.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {activity.description}
              </p>
              {activity.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {activity.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}