function Footer() {
  return (
    <footer className="footer" >
      <div className="footer-container">
        
        {/* Logo / Nome sito */}
        <div className="footer-brand" >
          <h2 >MyShop</h2>
          <p>Il tuo negozio online di fiducia</p>
        </div>

        {/* Link rapidi */}
        <nav className="footer-nav" >
          <ul >
            <li><a href="/" >Home</a></li>
            <li><a href="/contact" >Contatti</a></li>
            <li><a href="/about" >Chi siamo</a></li>
          </ul>
        </nav>

        {/* Social */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" >Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" >Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" >Twitter</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copy" >
        © {new Date().getFullYear()} MyShop. Tutti i diritti riservati.
      </div>
    </footer>
  )
}

export default Footer