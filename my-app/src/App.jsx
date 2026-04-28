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

function App() {

  const [currentFilters, setCurrentFilters] = useState({});

  const handleFilterApply = (filters) => {
    setCurrentFilters(filters);
    console.log('Фильтры применены:', filters);
  };


  const [products, setProducts] = useState([
    {
        id: 1,
        category: "tv",
        make: "Samsung",
        brand: "Samsung",
        model: "65\" OLED 4K Smart TV",
        price: 1299,
        isSpecialOffer: true
    },
    {
        id: 2,
        category: "phone",
        make: "Apple",
        brand: "Apple",
        model: "iPhone 15 Pro",
        price: 999,
        isSpecialOffer: false
    },
    {
        id: 3,
        category: "laptop",
        make: "Lenovo",
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon",
        price: 1499,
        isSpecialOffer: true
    },
    {
        id: 4,
        category: "laptop",
        make: "Lenovo",
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon",
        price: 1499,
        isSpecialOffer: true
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  
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
