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
    // Здесь можно сделать запрос к API или отфильтровать данные
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
    </>
  )
}

export default App
