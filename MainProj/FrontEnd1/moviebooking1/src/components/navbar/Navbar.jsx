
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navLinksContainerRef = useRef(null);

  const onLogin = () => {
    navigate('/login');
  }

  const onSignUp = () => {
    navigate('/register');
  }

  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">MovieMagic</div>
        <div ref={navLinksContainerRef} className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link
                className={`navBtn ${activePath === '/home' ? 'active' : ''}`}
                to="/home"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`navBtn ${activePath === '/movieList' ? 'active' : ''}`}
                to="/movieList"
                onClick={toggleMenu}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                className={`navBtn ${activePath === '/theaterList' ? 'active' : ''}`}
                to="/theaterList"
                onClick={toggleMenu}
              >
                Theaters
              </Link>
            </li>
            <li>
              <Link
                className={`navBtn ${activePath === '/showtimes' ? 'active' : ''}`}
                to="/"
                onClick={toggleMenu}
              >
                Showtimes
              </Link>
            </li>
          </ul>
        </div>
        <div className="auth-buttons">
          <button onClick={onLogin} className="login-btn">Log in</button>
          <button onClick={onSignUp} className="signup-btn">Sign up</button>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
