'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionProps } from '@/types'

export default function Section({ children, className = '', id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6'}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}