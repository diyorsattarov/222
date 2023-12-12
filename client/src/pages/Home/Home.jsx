import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the CSS for styling
import Table from './../../components/Table/Table'; // Import the Table component
import './Home.css';
import Catalog from './../../components/Catalog/Catalog';

function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <div className="content">
        <Catalog />
      </div>
    </div>
  );
}

export default Home;

