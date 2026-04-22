import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Filters from './Filters';
import './App.css'

function App() {
  const [currentFilters, setCurrentFilters] = useState({});

  const handleFilterApply = (filters) => {
    setCurrentFilters(filters);
    console.log('Фильтры применены:', filters);
  };
  return (
    <>
    <header className='header'>
      <div>
        <div>
          <button>TechStore</button>
          <nav>
            <a href="TV"> TV </a>
            <a href="Phone"> Phone </a>
            <a href="Laptop"> Laptop </a>
          </nav>
        </div>
        <div>
          <button>Корзина</button>
          <button>Профиль</button>
        </div>
      </div>
    </header>

     <div className="app-container">

      <aside className="sidebar">
        <Filters onFilterApply={handleFilterApply} />
      </aside>

    </div>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h3>Support</h3>
            <ul>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className='footer-section newsletter'>
            <h3>Newsletter</h3>
            <p>Subscribe for exclusive deals</p>
            <div className='newsletter-form'>
            <input type='email' placeholder='Your email address'/>
            <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>© 2026 TechStore. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
    </>
  )
}

export default App
