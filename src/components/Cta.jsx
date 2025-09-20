export default function Cta({ onLaunch, onDownload }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Try SIUPAY today</h2>
          <p>Transform your business with next‑gen payments</p>
          <div className="cta-buttons">
            <button className="btn-primary launch-app-btn" onClick={onLaunch}>
              <span>Launch APP</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.167 10h11.666m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-download" onClick={onDownload}>Download App</button>
            <button className="btn-secondary" onClick={() => window.alert('Contact: team@siupay.com')}>Contact us</button>
          </div>
        </div>
      </div>
    </section>
  )
}


