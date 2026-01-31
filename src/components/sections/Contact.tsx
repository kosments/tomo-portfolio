'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Twitter } from 'lucide-react'
import Section from '@/components/ui/Section'
import { SOCIAL_LINKS, ANIMATION_VARIANTS } from '@/lib/constants'

const IconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  'Mail': Mail,
  'Instagram': Instagram,
  'Twitter': Twitter,
}

export default function Contact() {
  return (
    <Section id="contact" className="bg-zinc-900 text-white">
      <motion.div
        initial={ANIMATION_VARIANTS.fadeInUp.initial}
        whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
        viewport={{ once: true }}
        transition={ANIMATION_VARIANTS.fadeInUp.transition}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          カナダ西部での商業プロジェクト、プリント、ガイドツアーのご依頼をお受けしています。
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <a 
            href="mailto:tomo@example.com"
            className="px-8 py-4 font-bold transition-colors w-full md:w-auto rounded-lg bg-white text-zinc-900 hover:bg-zinc-200"
          >
            お問い合わせ
          </a>
          <a 
            href="https://instagram.com/tomo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border font-medium transition-colors w-full md:w-auto rounded-lg border-zinc-700 text-white hover:border-white"
          >
            Instagramをフォロー
          </a>
        </div>

        <div className="flex justify-center space-x-6 pt-8">
          {SOCIAL_LINKS.map((social) => {
            const IconComponent = IconMap[social.icon] || Mail
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label={social.name}
              >
                <IconComponent size={20} />
              </a>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}