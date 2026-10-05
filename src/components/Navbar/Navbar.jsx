import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Button from '../Button/Button';

const NAV_LINKS = ['Home', 'About', 'Services'];

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
        <div className="navbar_logo">LOGO</div>
        <div className="navbar_links">
            {NAV_LINKS.map(link => (
                <span key={link} className="navbar_link" onClick={() => link === 'Home' && navigate('/')}>{link}</span>
            ))}
        </div>
        <div className="navbar_button">
            <Button text="Log In"  style={{border: "2px solid var(--color-border-secondary)", borderRadius: "var(--radius-md)", color: "var(--color-text-secondary)",  }}/>
            <Button text="Sign Up" onClick={() => navigate('/sign-up')} style={{ backgroundColor: "var(--color-bg-secondary)", borderRadius: "var(--radius-md)", color: "var(--color-text-tertiary)" }} />
        </div>
    </nav>
  );
}

export default Navbar;