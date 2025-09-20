import { useEffect, useRef } from 'react'

function useCounterAnimation() {
  const refs = useRef([])
  useEffect(() => {
    const animateCounter = (element, start, end, duration) => {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const value = start + (end - start) * progress

        if (element.dataset.type === 'mplus') {
          element.textContent = `${value.toFixed(1)}M+`
        } else if (element.dataset.type === 'seconds') {
          element.textContent = `${value.toFixed(1)}s`
        } else if (element.dataset.type === 'percent') {
          element.textContent = `${value.toFixed(1)}%`
        } else if (element.dataset.type === 'static') {
          element.textContent = '24/7'
        }

        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const nodes = refs.current
          if (!nodes) return
          animateCounter(nodes[0], 0, 1, 2000)
          animateCounter(nodes[1], 0, 0.5, 2000)
          animateCounter(nodes[2], 0, 99.9, 2000)
          // 24/7은 고정
          observer.disconnect()
        }
      })
    }, { threshold: 0.5 })

    const section = document.querySelector('.stats')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return refs
}

export default function Stats() {
  const numberRefs = useCounterAnimation()

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number" ref={(el) => (numberRefs.current[0] = el)} data-type="mplus">1M+</div>
            <div className="stat-label">Total volume</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={(el) => (numberRefs.current[1] = el)} data-type="seconds">0.5s</div>
            <div className="stat-label">Avg. confirmation</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={(el) => (numberRefs.current[2] = el)} data-type="percent">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-type="static">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}


