import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
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
    </>
  )
}

export default App
