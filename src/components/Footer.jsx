export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://github.com/user-attachments/assets/5d995edd-0690-4c55-b113-70797368bd9f" alt="SIUPAY" width="32" height="32" />
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


