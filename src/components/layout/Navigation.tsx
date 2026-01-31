'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('#hero')}
          className={`text-2xl font-bold tracking-tighter z-50 transition-colors ${
            isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
          }`}
        >
          TOMO LIFE.
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`text-sm font-medium hover:opacity-70 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 p-2 ${
            isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 md:hidden bg-white"
            >
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-light text-gray-900"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}