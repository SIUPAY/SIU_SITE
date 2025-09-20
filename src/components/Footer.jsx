export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={`data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
                <path fill='#4BA3FF' d='M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25c-6.065 0-11-4.935-11-11S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11z'/>
                <path fill='#4BA3FF' d='M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 13c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'/>
              </svg>
            `)}`} alt="SIUPAY" />
            <span>SIUPAY</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#">Payments</a>
              <a href="#">API Docs</a>
              <a href="#">Developer tools</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Help center</a>
              <a href="#">Community</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 SIUPAY. All rights reserved.</p>
          <div className="footer-social">
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


