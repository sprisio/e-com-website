import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; // Import hooks
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  // State is now managed here in the common parent
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BrowserRouter>
      <div className="App">
        {/* Pass the state down to the Navbar */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main>
          <Routes>
            {/* Pass the filtered products down to the HomePage */}
            <Route path="/" element={<HomePage products={filteredProducts} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;