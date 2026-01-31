'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import { photos } from '@/data/photos'
import { ANIMATION_VARIANTS } from '@/lib/constants'

export default function Gallery() {
  return (
    <Section id="gallery" fullWidth className="bg-white">
      <div className="px-6 max-w-7xl mx-auto mb-16">
        <span className="font-semibold tracking-wider text-sm uppercase text-forest-green">
          Portfolio
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-video overflow-hidden cursor-pointer bg-gray-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-xs font-bold uppercase tracking-widest mb-1 text-sky-blue">
                {photo.category}
              </span>
              <h3 className="text-white text-xl font-medium">{photo.title}</h3>
              <p className="text-white/80 text-sm mt-1">{photo.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-8 py-4 font-medium transition-colors duration-300 rounded-lg bg-forest-green text-white hover:bg-forest-green/90">
          View All Photos
        </button>
      </div>
    </Section>
  )
}