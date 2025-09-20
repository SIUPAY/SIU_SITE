export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="https://github.com/user-attachments/assets/5d995edd-0690-4c55-b113-70797368bd9f" alt="SIUPAY" width="32" height="32" />
          <span>SIUPAY</span>
        </div>
        <div className="nav-links">
          <a href="#features" onClick={(e) => { e.preventDefault(); onNavigate('features') }}>Features</a>
          <a href="#about" onClick={(e) => e.preventDefault()}>About</a>
          <a href="#team" onClick={(e) => e.preventDefault()}>Team</a>
          <a href="#contact" onClick={(e) => e.preventDefault()}>Contact</a>
        </div>
      </div>
    </nav>
  )
}


