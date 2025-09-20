import { useCallback, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Cta from './components/Cta'
import Footer from './components/Footer'
import useInteractiveEffects from './hooks/useInteractiveEffects'
import { launchAppSmart, downloadAppSmart } from './utils/launchApp'

const LAUNCH_APP_URL = 'https://app.siupay.com' // 실제 URL로 변경하세요

function App() {
  useInteractiveEffects()
  const launchApp = useCallback(() => launchAppSmart(), [])
  const downloadApp = useCallback(() => downloadAppSmart(), [])

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }, [])

  // 스크롤 시 네비게이션 배경 변경
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (!navbar) return
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)'
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)'
        navbar.style.boxShadow = 'none'
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 페이드인 애니메이션
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    const els = document.querySelectorAll('.feature-card, .stat-item, .section-header')
    els.forEach((el) => {
      el.classList.add('fade-in')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar onNavigate={scrollToId} />
      <main>
        <Hero onLaunch={launchApp} onDownload={downloadApp} />
        <Features />
        <Stats />
        <Cta onLaunch={launchApp} onDownload={downloadApp} />
      </main>
      <Footer />
    </>
  )
}

export default App
