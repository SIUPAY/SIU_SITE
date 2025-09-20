export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Why SIUPAY?</h2>
          <p>Next‑generation payments built on innovative Sui technology</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#4BA3FF" strokeWidth="2" />
                <path d="M16 24l6 6 12-12" stroke="#4BA3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Instant settlement</h3>
            <p>Sub‑second finality thanks to parallel execution (Narwhal/Bullshark).</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="32" height="24" rx="4" stroke="#4BA3FF" strokeWidth="2" />
                <path d="M8 20h32" stroke="#4BA3FF" strokeWidth="2" />
                <circle cx="16" cy="28" r="2" fill="#4BA3FF" />
              </svg>
            </div>
            <h3>Low fees</h3>
            <p>Low, predictable fees designed for mass adoption.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4v8m0 24v8m16.97-32.97l-5.66 5.66M12.69 35.31l-5.66 5.66M44 24h-8M12 24H4m32.97 16.97l-5.66-5.66M12.69 12.69l-5.66-5.66" stroke="#4BA3FF" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="24" r="6" stroke="#4BA3FF" strokeWidth="2" />
              </svg>
            </div>
            <h3>Interoperable</h3>
            <p>Cross‑chain connectivity via protocols like ZetaChain.</p>
          </div>

          
        </div>
      </div>
    </section>
  )
}


