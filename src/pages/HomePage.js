import React from 'react';
import ProductList from '../components/ProductList';

// This component now receives the filtered products as a prop
const HomePage = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;