"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Home, User, Code, Folder, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { href: "#about", label: "About", icon: <User className="h-4 w-4" /> },
    { href: "#skills", label: "Skills", icon: <Code className="h-4 w-4" /> },
    { href: "#projects", label: "Projects", icon: <Folder className="h-4 w-4" /> },
    { href: "#contact", label: "Contact", icon: <MessageSquare className="h-4 w-4" /> },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-xl font-bold transition-colors hover:text-primary flex items-center gap-2">
              <Code className="h-5 w-5" />
              <span>Portfolio</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center"
            >
              {navLinks.map((link, index) => (
                <Button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  variant={activeSection === link.href.substring(1) ? "default" : "ghost"}
                  size="sm"
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? "" : "hover:text-primary"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="ml-2"
            >
              <ModeToggle />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ml-2"
            >
              <Button asChild size="sm" className="flex items-center gap-2 group">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  variant={activeSection === link.href.substring(1) ? "default" : "ghost"}
                  className="justify-start"
                >
                  <div className="flex items-center gap-2">
                    {link.icon}
                    {link.label}
                  </div>
                </Button>
              ))}
              <Button asChild size="sm" className="mt-2 flex items-center gap-2">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
