import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar(){
  const { t, i18n } = useTranslation()
  return (
    <header className="bg-gradient-to-r from-earth via-gray-800 to-earth backdrop-blur sticky top-0 z-30 shadow-2xl border-b-2 border-gold">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex gap-4 flex-shrink-0 border-r border-gold/30 pr-6">
          <div className="text-gold font-bold text-xl drop-shadow-lg">🛕</div>
          <div className="text-gold font-bold text-lg drop-shadow-lg whitespace-nowrap">{t('siteTitle')}</div>
        </div>
        <nav className="hidden md:flex gap-5 items-center flex-1 ml-6 justify-center pr-8">
          <NavLink to="/heritage" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('heritage')}</NavLink>
          <NavLink to="/festivals" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('festivals')}</NavLink>
          <NavLink to="/arts" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('arts')}</NavLink>
          <NavLink to="/cuisine" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('cuisine')}</NavLink>
          <NavLink to="/languages" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('languages')}</NavLink>
          <NavLink to="/explore" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('explore')}</NavLink>
        </nav>
        
        <div className="hidden md:flex gap-5 items-center flex-shrink-0 border-l border-gold/30 pl-6">
          <NavLink to="/" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('home')}</NavLink>
          <NavLink to="/about" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('about')}</NavLink>
          <NavLink to="/contact" className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm">{t('contact')}</NavLink>
          <div className="border-l border-gold/30 pl-3 flex gap-2 items-center">
            <select
              aria-label="language"
              onChange={(e)=>i18n.changeLanguage(e.target.value)}
              className="bg-gray-700 text-white border border-gold/50 px-2 py-1 rounded text-sm hover:border-gold transition-colors font-medium cursor-pointer"
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="hi">हिंदी</option>
            </select>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
