import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="#" className="logo">
          <img src="/logo.png" alt="LeneBolos" className="logo-img" />
        </a>
        <nav className="nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato" className="btn btn-primary">Encomendar</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
