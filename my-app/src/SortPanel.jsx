import React, { useState } from 'react';
import './SortPanel.css'

const SortPanel = ({ products, onSortChange }) => {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const brands = ['', 'Samsung', 'LG', 'Sony', 'Google', 'Apple', 'Xiaomi', 'Lenovo', 'HP', 'ASUS', 'Acer'];

  const handleSort = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    
    let sortedProducts = [...products];
    
    if (brand !== '') {
      // Сортируем так, чтобы выбранный бренд был сверху
      sortedProducts.sort((a, b) => {
        if (a.model === brand && b.model !== brand) return -1;
        if (a.model !== brand && b.model === brand) return 1;
        return a.model.localeCompare(b.model);
      });
    } else {
      // Сортируем по алфавиту
      sortedProducts.sort((a, b) => a.model.localeCompare(b.model));
    }
    
    onSortChange(sortedProducts);
  };

  return ( 
    <select
      value={selectedBrand}
      onChange={handleSort}
      className="sort"
    >
      {brands.map(brand => (
        <option key={brand} value={brand}>
          {brand === '' ? '' : ` ${brand}`}
        </option>
      ))}
    </select>
    );
};

export default SortPanel;