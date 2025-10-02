import React, { useEffect, useRef, useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null); // Create a ref for the card element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0] is the first (and only) element being observed
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup function to unobserve when the component unmounts
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    // Attach the ref and dynamically add the 'visible' class
    <div 
      ref={cardRef} 
      className={`product-card ${isVisible ? 'visible' : ''}`}
    >
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
    </div>
  );
};

export default ProductCard;