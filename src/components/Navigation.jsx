import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          BK<span style={{color: '#6306e2'}}>X</span> <span style={{letterSpacing: '0.1em'}}>EPOXY</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Početna
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link free-estimate ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Besplatna procjena
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
