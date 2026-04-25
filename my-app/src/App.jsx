import { useState } from 'react'
import Filters from './Filters';
import Test from './Header';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Counter from './Counter';

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
      <div>
        <div class="products-count">
        <Counter />
        </div>
        <div class="products-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </div>
    </div>

    <Footer />
    
    </>
  )
}

export default App
