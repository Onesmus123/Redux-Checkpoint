import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filter from './components/Filter';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Main App component
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <AddTask />
        <Filter />
        <ListTask />
      </main>
      <Footer />
    </div>
  );
};

export default App;
