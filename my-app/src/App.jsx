import { useState } from 'react'
import Filters from './Filters';
import Test from './Header';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Counter from './Counter';
import Banner from './Banner';
import SortPanel from './SortPanel';
import productsData from './data/products';

function App() {

  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
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
        <Banner />
      </aside>

      <div>
        <div class="products-count" >
        <Counter count={filteredProducts.length} />
        <div className='sort-panel'>
        <SortPanel 
          products={products} 
          onSortChange={setFilteredProducts} 
        />
        </div>
        </div>
        <div class="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
      </div>
    </div>

    <Footer />
    
    </>
  )
}

export default App
