export default function Hero({ onLaunch, onDownload }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">On Sui Network</span><br />
            Experience next‑gen payments
          </h1>
          <p className="hero-description">
            SIUPAY leverages Sui's high throughput and low fees<br />
            to power seamless ordering and payments.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary launch-app-btn" onClick={onLaunch}>
              <span>Launch APP</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.167 10h11.666m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-download" onClick={onDownload}>Download App</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-content">
              <div className="card-icon">💰</div>
              <h3>Fast payments</h3>
              <p>Confirm in 0.5s</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-content">
              <div className="card-icon">🔒</div>
              <h3>Secure</h3>
              <p>Blockchain‑grade</p>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-content">
              <div className="card-icon">⚡</div>
              <h3>Low fees</h3>
              <p>From 0.01%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}


