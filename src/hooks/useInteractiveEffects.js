import { useEffect } from 'react'

export default function useInteractiveEffects() {
  // 플로팅 카드 호버/랜덤 오프셋
  useEffect(() => {
    const floatingCards = document.querySelectorAll('.floating-card')
    const disposers = []

    floatingCards.forEach((card) => {
      const randomRotation = (Math.random() - 0.5) * 10
      const randomX = (Math.random() - 0.5) * 20
      const randomY = (Math.random() - 0.5) * 20
      card.style.transform = `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px)`

      const onEnter = () => {
        card.style.transform = `rotate(0deg) translate(0px, -10px) scale(1.05)`
        card.style.transition = 'transform 0.3s ease'
      }
      const onLeave = () => {
        card.style.transform = `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px) scale(1)`
      }
      card.addEventListener('mouseenter', onEnter)
      card.addEventListener('mouseleave', onLeave)
      disposers.push(() => {
        card.removeEventListener('mouseenter', onEnter)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    // 배경 오브 마우스 인터랙션
    const onMouseMove = (e) => {
      const orbs = document.querySelectorAll('.gradient-orb')
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5
        const x = (mouseX - 0.5) * speed * 20
        const y = (mouseY - 0.5) * speed * 20
        orb.style.transform = `translate(${x}px, ${y}px)`
      })
    }
    document.addEventListener('mousemove', onMouseMove)
    disposers.push(() => document.removeEventListener('mousemove', onMouseMove))

    return () => disposers.forEach((fn) => fn())
  }, [])
}



