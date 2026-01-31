'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import { ANIMATION_VARIANTS } from '@/lib/constants'

export default function LifeInCanada() {
  return (
    <div className="bg-gray-50">
      <Section id="life-in-canada">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          <motion.div
            initial={ANIMATION_VARIANTS.slideInLeft.initial}
            whileInView={ANIMATION_VARIANTS.slideInLeft.animate}
            viewport={{ once: true }}
            transition={ANIMATION_VARIANTS.slideInLeft.transition}
            className="w-full lg:w-3/5"
          >
            <div className="aspect-video overflow-hidden shadow-xl rounded-2xl">
              <Image 
                src="https://picsum.photos/1600/900?random=canada"
                alt="カナダの美しい湖畔の風景" 
                width={1600}
                height={900}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={ANIMATION_VARIANTS.slideInRight.initial}
            whileInView={ANIMATION_VARIANTS.slideInRight.animate}
            viewport={{ once: true }}
            transition={ANIMATION_VARIANTS.slideInRight.transition}
            className="w-full lg:w-2/5 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Life in the North
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed border-l-2 border-forest-green pl-6 text-gray-600">
                "The mountains are calling and I must go."
              </p>
              <p className="leading-relaxed text-gray-600">
                カナダでの生活は、季節を受け入れることを意味します。夏の鮮やかな緑から冬の雪の深い静寂まで、
                毎日が自然に対する新しい視点を提供してくれます。
              </p>
              <p className="leading-relaxed text-gray-600">
                私のライフスタイルは、持続可能な生活、痕跡を残さないキャンプ、
                そして野生の孤独の中で平和を見つけることを中心に回っています。
              </p>
            </div>
            <button className="inline-block font-semibold border-b border-forest-green pb-1 transition-colors text-forest-green hover:opacity-70">
              ジャーナルを読む →
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}