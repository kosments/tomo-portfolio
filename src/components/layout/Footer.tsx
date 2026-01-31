'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © 2026 Tomo Life. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <span>
              Photos by{' '}
              <a 
                href="https://unsplash.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Unsplash
              </a>
            </span>
            <span>•</span>
            <span>
              Built with{' '}
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Next.js
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}