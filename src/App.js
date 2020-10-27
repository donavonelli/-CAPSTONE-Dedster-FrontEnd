import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home'
import './App.css';
// import Routes from './config/Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Routes /> */}
    </div>
  );
}

export default App;