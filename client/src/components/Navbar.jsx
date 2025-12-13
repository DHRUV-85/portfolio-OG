"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Sun, Moon, Menu, X } from "../icons"
import { useTheme } from "../contexts/ThemeContext"

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300
        ${darkMode ? "bg-[#146152]/95 backdrop-blur-md text-white" : "bg-white/95 backdrop-blur-md text-gray-900"}
        shadow-xl border-b-2 border-[#B4CF66]/30 dark:border-[#44803F]/30`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="/" className="text-3xl font-extrabold tracking-tight flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#146152] to-[#44803F] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="bg-gradient-to-r from-[#146152] to-[#44803F] bg-clip-text text-transparent">Dhruv</span>
          <span className="text-[#B4CF66] dark:text-[#FFEC5C]">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-5 py-2.5 rounded-xl font-semibold text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-[#B4CF66] hover:to-[#FFEC5C] dark:hover:from-[#44803F] dark:hover:to-[#B4CF66] hover:text-[#146152] dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {label}
            </a>
          ))}

          {/* Admin Access Button */}
          {/* <Link
            to="/admin/login"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Admin
          </Link> */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 p-3 rounded-xl bg-gradient-to-r from-[#FFEC5C] to-[#B4CF66] dark:from-[#44803F] dark:to-[#146152] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-[#FFEC5C]" /> : <Moon className="w-5 h-5 text-[#146152]" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gradient-to-r from-[#FFEC5C] to-[#B4CF66] dark:from-[#44803F] dark:to-[#146152] hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-[#FFEC5C]" /> : <Moon className="w-5 h-5 text-[#146152]" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2.5 rounded-xl bg-gradient-to-r from-[#146152] to-[#44803F] text-white hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#146152]/95 backdrop-blur-md border-t-2 border-[#B4CF66]/30 dark:border-[#44803F]/30 shadow-2xl animate-fadeIn px-6 py-6">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-5 py-3.5 rounded-xl mb-2 font-bold text-gray-700 dark:text-gray-200 bg-gradient-to-r hover:from-[#B4CF66] hover:to-[#FFEC5C] dark:hover:from-[#44803F] dark:hover:to-[#B4CF66] hover:text-[#146152] dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {label}
            </a>
          ))}

          {/* Mobile Admin Access */}
          <Link
            to="/admin/login"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-5 py-3.5 rounded-xl mt-4 font-bold bg-gradient-to-r from-[#146152] to-[#44803F] text-white text-center hover:from-[#44803F] hover:to-[#B4CF66] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Admin Access
          </Link>
        </div>
      )}
    </nav>
  )
}
