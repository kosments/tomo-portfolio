'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import { ANIMATION_VARIANTS } from '@/lib/constants'

export default function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
          viewport={{ once: true }}
          transition={ANIMATION_VARIANTS.fadeInUp.transition}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            カナダの雄大な自然の中で、アウトドアライフを満喫しています。
            山々、湖、森林での冒険を通じて、自然の美しさと力強さを写真に収めています。
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            ハイキング、キャンプ、スキーなど、四季を通じて様々なアクティビティを楽しみながら、
            カナダでの生活の魅力を発信しています。
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Based in</h3>
            <p className="text-gray-600">British Columbia, Canada</p>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={ANIMATION_VARIANTS.slideInRight.initial}
          whileInView={ANIMATION_VARIANTS.slideInRight.animate}
          viewport={{ once: true }}
          transition={ANIMATION_VARIANTS.slideInRight.transition}
          className="relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/600/750?random=profile"
              alt="Tomoのプロフィール写真"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-forest-green/10 rounded-full -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-blue/10 rounded-full -z-10" />
        </motion.div>
      </div>
    </Section>
  )
}