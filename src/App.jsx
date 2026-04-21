import { useState, useEffect } from 'react'
import './index.css'

import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Channels from './components/Channels'
import Stats from './components/Stats'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <LogoBar />
        <Problem />
        <HowItWorks />
        <Channels />
        <Stats />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
