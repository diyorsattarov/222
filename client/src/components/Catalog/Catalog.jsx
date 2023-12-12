// CatalogComponent.jsx

import React from 'react';
import './Catalog.css'; // Make sure to create this CSS file

const CatalogComponent = () => {
  return (
    <div className="catalog">
      {/* Your catalog items go here */}
      <div className="catalog-item">Item 1</div>
      <div className="catalog-item">Item 2</div>
      <div className="catalog-item">Item 1</div>
      <div className="catalog-item">Item 2</div>
      <div className="catalog-item">Item 1</div>
      <div className="catalog-item">Item 2</div>
      {/* Add more items as needed */}
    </div>
  );
};

export default CatalogComponent;
