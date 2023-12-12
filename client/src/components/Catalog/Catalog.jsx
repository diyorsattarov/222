// CatalogComponent.jsx

import React from 'react';
import './Catalog.css';

const CatalogComponent = ({ darkMode }) => {
  return (
    <div className={`catalog ${darkMode ? 'dark' : ''}`}>
      {/* Example card item */}
      <div className="card">
        <img className="card-image" src="images/product.png" alt="Item 1" />
        <div className="card-content">
          <h3 className="card-title">Item 1</h3>
          <p className="card-description">Description for Item 1</p>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="images/product.png" alt="Item 1" />
        <div className="card-content">
          <h3 className="card-title">Item 1</h3>
          <p className="card-description">Description for Item 1</p>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="images/product.png" alt="Item 1" />
        <div className="card-content">
          <h3 className="card-title">Item 1</h3>
          <p className="card-description">Description for Item 1</p>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="images/product.png" alt="Item 1" />
        <div className="card-content">
          <h3 className="card-title">Item 1</h3>
          <p className="card-description">Description for Item 1</p>
        </div>
      </div>
      {/* Add more card items as needed */}
    </div>
  );
};

export default CatalogComponent;
