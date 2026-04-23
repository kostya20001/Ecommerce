import { useState } from 'react'
import Filters from './Filters';
import Test from './Header';
import './App.css'
import Header from './Header';
import Footer from './Footer';

function App() {
  const [currentFilters, setCurrentFilters] = useState({});

  const handleFilterApply = (filters) => {
    setCurrentFilters(filters);
    console.log('Фильтры применены:', filters);
  };
  return (
    <>
    <Header />

     <div className="app-container">

      <aside className="sidebar">
        <Filters onFilterApply={handleFilterApply} />
      </aside>

    </div>

    <Footer />
    
    </>
  )
}

export default App
